import Web3 from "web3";

import MetamaskInpageProvider from "metamask-crx/app/scripts/lib/inpage-provider.js";
import PortStream from "metamask-crx/app/scripts/lib/port-stream.js";

import { digestTweet } from "./communication/metamaskUtil.js";

browser.runtime.onInstalled.addListener(details => {
  console.log("previousVersion", details.previousVersion);
});

console.log(`Full of tweet loaded!`);
