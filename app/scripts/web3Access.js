import React from "react";
import ReactDOM from "react-dom";
import Popup from "./ui/Popup.js";
import ConfirmButton from "./ui/ConfirmButton.js";
import jsConnector from "tweets-connector";

window.addEventListener("load", function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)

  if (typeof web3 !== "undefined") {
    // Use the browser's ethereum provider
    console.log("Using metamask!");
  } else {
    console.log("No web3? You should consider trying MetaMask!");
  }

  const injectPoint = document.querySelector(".TweetBoxToolbar");

  // Inject button
  const popupInjectPoint = injectPoint.appendChild(
    document.createElement("div")
  );

  ReactDOM.render(<Popup />, popupInjectPoint);

  const tweetsFooter = Array.from(
    document.querySelectorAll(".stream-item-footer > .ProfileTweet-actionList")
  );

  tweetsFooter.forEach(point => {
    const injectElem = document.createElement("div");
    const confirmInject = point.appendChild(injectElem);
    injectElem.style = "display: inline";
    ReactDOM.render(<ConfirmButton />, confirmInject);
  });

  jsConnector.init(
    "0xc301ef8082e0f65d5edd979351218f1f8a851b1e",
    false,
    window.web3
  );
});
