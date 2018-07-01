import { digestTweet } from './communication/metamaskUtil.js';

browser.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion)
})

console.log(`Full of tweet loaded!`)
