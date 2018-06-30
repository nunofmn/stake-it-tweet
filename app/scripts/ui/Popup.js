import styled, { css } from "react-emotion";
import React, { Fragment } from "react";
import PopupContent from "./PopupContent.js";

export default class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false, tweetData: { tweet: "" } };
    this.buttonClick = this.buttonClick.bind(this);
    this.getTweetData = this.getTweetData.bind(this);
  }

  getTweetData() {
    const tweet = document.querySelector("#tweet-box-home-timeline")
      .firstElementChild.innerText;

    return {
      tweet
    };
  }

  buttonClick() {
    const tweet = this.getTweetData();

    this.setState(prevState => ({
      showPopup: !prevState.showPopup,
      tweetData: tweet
    }));

    const message = {
      type: "stake-tweet",
      payload: {
        tweet
      }
    };

    browser.runtime.sendMessage(message).then(response => {
      console.log("Response: ", response);
    });
  }

  render() {
    const { tweetData } = this.state;

    return (
      <Fragment>
        <Button onClick={this.buttonClick}>Stake it!</Button>
        {this.state.showPopup && <PopupContent tweetData={tweetData} />}
      </Fragment>
    );
  }
}

const Button = styled("a")`
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
`;
