import styled, { css } from 'react-emotion'
import React, { Fragment } from 'react'
import PopupContent from './PopupContent.js'
import jsConnector from 'tweets-connector'
import tweetsParser from 'stake-it-twitter-parser'

export default class ConfirmButton extends React.Component {
  constructor (props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick () {
    // Call contract here
    // eslint-disable-next-line
    console.log('lalal')
    let tweetContent = tweetsParser.getTweetText(this.props.tweetContent)
    let tweetId
    try {
      tweetId = tweetsParser.generateTweetIdFromContent(tweetContent)
      window.localStorage.setItem('1', tweetId)
    } catch (e) {
      console.error('Fail at generating tweet id')
    }

    jsConnector
      .confirmStatement(
        tweetId,
        '1'
      )
      .then(console.log)
      .catch(console.err)
  }
// {this.props.nameLabel}
  render () {
    return <Button onClick={this.buttonClick}>Confirm</Button>
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
