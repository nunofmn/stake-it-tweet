import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './ui/Popup.js';

const injectPoint = document.querySelector('.TweetBoxToolbar')

const web3Script = chrome.extension.getURL('scripts/web3Access.js')
const node = document.getElementsByTagName('body')[0]
const script = document.createElement('script')
script.setAttribute('type', 'text/javascript')
script.setAttribute('src', web3Script)
node.appendChild(script)
