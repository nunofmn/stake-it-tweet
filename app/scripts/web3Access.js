import React from "react";
import ReactDOM from "react-dom";
import Popup from "./ui/Popup.js";

window.addEventListener("load", function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== "undefined") {
    // Use the browser's ethereum provider
    const provider = web3.currentProvider;
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

  const allTweets = Array.from(document.querySelectorAll(".tweet-text"));

  allTweets.map(tweet => {
    console.log("Tweet hashtag: ", tweet.getElementsByTagName("a")[0]);
  });
});
