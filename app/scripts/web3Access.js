import React from 'react'
import ReactDOM from 'react-dom'
import Popup from './ui/Popup.js'
import jsConnector from 'tweets-connector'

window.addEventListener('load', function () {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)

  if (typeof web3 !== 'undefined') {
    // Use the browser's ethereum provider
    console.log('Using metamask!')
  } else {
    console.log('No web3? You should consider trying MetaMask!')
  }
    // var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

  const injectPoint = document.querySelector('.TweetBoxToolbar')

  // Inject button
  const popupInjectPoint = injectPoint.appendChild(
    document.createElement('div')
  )

  ReactDOM.render(<Popup />, popupInjectPoint)

/*
  allTweets.map(tweet => {
    console.log('Tweet hashtag: ', tweet.getElementsByTagName('a')[0])
  }) */

  jsConnector.init('0xc301ef8082e0f65d5edd979351218f1f8a851b1e', false, window.web3)
})
