import React from "react";
import ReactDOM from "react-dom";
import Popup from "./ui/Popup.js";

const injectPoint = document.querySelector(".TweetBoxToolbar");

// Inject button
const popupInjectPoint = injectPoint.appendChild(document.createElement("div"));
ReactDOM.render(<Popup />, popupInjectPoint);
