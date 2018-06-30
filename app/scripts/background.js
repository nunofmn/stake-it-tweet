import Web3 from "web3";

import MetamaskInpageProvider from "metamask-crx/app/scripts/lib/inpage-provider.js";
import PortStream from "metamask-crx/app/scripts/lib/port-stream.js";

import { digestTweet } from "./communication/metamaskUtil.js";

const METAMASK_EXTENSION_ID = "nkbihfbeogaeaoehlefnkodbefgpgknn";
const metamaskPort = chrome.runtime.connect(METAMASK_EXTENSION_ID);
const pluginStream = new PortStream(metamaskPort);
const web3Provider = new MetamaskInpageProvider(pluginStream);
const webj = new Web3(web3Provider);

console.log(webj.eth.sha3);

/*
 *browser.browserAction.onClicked.addListener(async tab => {
 *  console.log("Opened extension!");
 *  console.log("Address: ", address);
 *});
 */

browser.runtime.onInstalled.addListener(details => {
  console.log("previousVersion", details.previousVersion);
});

console.log(`Full of tweet loaded!`);

browser.runtime.onMessage.addListener(async function(msg) {
  const [address] = await webj.eth.getAccounts();
  console.log("Address: ", address);

  switch (msg.type) {
    case "stake-tweet":
      console.log(processTweet(msg.payload));
      return "Processing";
      break;
    default:
      return "nop!";
      break;
  }
});

const processTweet = ({ tweet }) => {
  const digest = webj.sha3(tweet);
  return digest;
};
