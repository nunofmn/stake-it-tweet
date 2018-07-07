import React from 'react'
import ReactDOM from 'react-dom'
import Popup from './ui/Popup.js'
import ConfirmButton from './ui/ConfirmButton.js'
import jsConnector from 'tweets-connector'
import tweetsParser from 'stake-it-twitter-parser'

window.addEventListener('load', function () {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)

  if (typeof web3 !== 'undefined') {
    // Use the browser's ethereum provider
    console.log('Using metamask!')
  } else {
    console.log('No web3? You should consider trying MetaMask!')
  }

  const injectPoint = document.querySelector('.TweetBoxToolbar')

  // Inject button
  const popupInjectPoint = injectPoint.appendChild(
    document.createElement('div')
  )

  ReactDOM.render(<Popup />, popupInjectPoint)

  const tweetsFooter = Array.from(
    document.querySelectorAll('.stream-item-footer > .ProfileTweet-actionList')
  )

  const tweetsElements = tweetsParser.getTweetsFromDocument(document)

  for (let point of tweetsElements) {
    const injectElem = document.createElement('div')
    const confirmInject = point.appendChild(injectElem)
    injectElem.style = 'display: inline'

    // let tweetContent = tweetsParser.getTweetText(point)

    ReactDOM.render(<ConfirmButton tweetContent={point} />, confirmInject)
  }
/*
  tweetsFooter.forEach(point => {
    const injectElem = document.createElement('div')
    const confirmInject = point.appendChild(injectElem)
    injectElem.style = 'display: inline'
    let buttonLabel = 'jojojo'
    ReactDOM.render(<ConfirmButton nameLabel={buttonLabel} />, confirmInject)
  }) */

  // setting up Ethereum addresses and accounts
  // alice
  window.localStorage.setItem('@alice_kjshdf8687', '0x3296C51BC98DD4dCd5605469EC3A736c0E60ef43')
  // bob
  window.localStorage.setItem('@bob_kjshdf8687', '0x64810ceFb991351B323E8A970CDA57E07EcBAd30')
  // charlie
  window.localStorage.setItem('@charlie_kjshdf8687', '0x5AB08F6B03a954BAde5dFd8bedF3f226195127Db')

  jsConnector.init(
    '0xc301ef8082e0f65d5edd979351218f1f8a851b1e',
    false,
    window.web3
  )
})
