import styled, { css } from 'react-emotion'
import React, { Fragment } from 'react'
import PopupContent from './PopupContent.js'
import { digestTweet } from '../communication/metamaskUtil.js'
import jsConnector from 'tweets-connector'

export default class Popup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showPopup: false,
      tweetData: { tweet: '', tweetDigest: '', nonce: '' },
      // Hardcode judge
      judge: {
        name: '@itsjoaosantos', // charlie
        id: '0x5AB08F6B03a954BAde5dFd8bedF3f226195127Db'
      },
      against: {
        name: '@itsjoaosantos', // bob
        id: '0x64810ceFb991351B323E8A970CDA57E07EcBAd30'
      }
    }

    this.buttonClick = this.buttonClick.bind(this)
    this.getTweetData = this.getTweetData.bind(this)
    this.confirmStake = this.confirmStake.bind(this)
  }

  getTweetData () {
    const tweet = document.querySelector('#tweet-box-home-timeline')
      .firstElementChild.innerText

    return tweet
  }

  buttonClick () {
    const cryptoRandoms = new Uint32Array(2)
    const nonceArray = window.crypto.getRandomValues(cryptoRandoms)
    const nonce = nonceArray[0]

    const tweet = this.getTweetData()
    const tweetDigest = digestTweet(tweet, nonce)

    this.setState(prevState => ({
      ...prevState,
      showPopup: !prevState.showPopup,
      tweetData: {
        tweet,
        tweetDigest,
        nonce
      }
    }))
  }

  confirmStake (tweetData, judge, against, nonce, value) {
    const tweetForm = document.querySelector('#tweet-box-home-timeline')
      .firstElementChild

    tweetForm.innerText = `${tweetData.tweet}\n#stakeit ${against.name} ${value} eth ${
      judge.name
    } n(${nonce})`

    // here -<
    // (party2Address, judgeAddress, tweetId, stakeValue)
    console.log('TWEET ID:' + tweetData.tweetDigest)
    jsConnector.createStatement(against.id, judge.id, tweetData.tweetDigest, value).then(console.log).catch(console.err)
  }

  render () {
    const { tweetData, judge, against } = this.state

    return (
      <Fragment>
        <Button onClick={this.buttonClick}>Stake it!</Button>
        {this.state.showPopup && (
          <PopupContent
            tweetData={tweetData}
            judge={judge}
            against={against}
            confirmStake={this.confirmStake}
          />
        )}
      </Fragment>
    )
  }
}

const Button = styled('a')`
  margin-left: 10px;

  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 10;
  -moz-border-radius: 10;
  border-radius: 10px;
  font-family: Arial;
  color: #ffffff;
  font-size: 13px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
    color: #ffffff;
  }
`
