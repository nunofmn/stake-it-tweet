import styled, { css } from 'react-emotion'
import React, { Fragment } from 'react'
import PopupContent from './PopupContent.js'
import { digestTweet } from '../communication/metamaskUtil.js'
import jsConnector from 'tweets-connector'
import tweetsParser from 'stake-it-twitter-parser'

// hash: 0x2bd3a5063c6b32efa51b709796d961f3f4a9b9be5096dc670bddf3384c1d5b73
// hash: 0x30c5227700a804905cd21572610d89f188e1756605b588ab01665dfe9eef318e
// the problem is that the tweet being generated is different than the one being used for the hash.

export default class Popup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showPopup: false,
      tweetData: { tweet: '', nonce: '' },
      // Hardcode judge
      judge: {
        name: '@charlie_kjshdf8687', // charlie
        id: window.localStorage.getItem('@charlie_kjshdf8687')
      },
      against: {
        name: '@bob_kjshdf8687', // bob
        id: window.localStorage.getItem('@bob_kjshdf8687')
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
    const tweetDigest = 'a'
    const tweet = this.getTweetData()
    // const tweetDigest = digestTweet(tweet, nonce)

    // window.localStorage.setItem('generated', tweet + nonce)

    this.setState(prevState => ({
      ...prevState,
      showPopup: !prevState.showPopup,
      tweetData: {
        tweet,
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

    const tweetDigest_ = tweetsParser.generateTweetIdFromContent(tweetForm.innerText)
    window.localStorage.setItem('a', tweetDigest_)
    console.error('Hash: ' + tweetDigest_)
    // here -<
    // (party2Address, judgeAddress, tweetId, stakeValue)

    jsConnector.createStatement(against.id, judge.id, tweetDigest_, value).then(console.log).catch(console.err)
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
