import styled, { css } from "react-emotion";
import React from "react";

export default function PopupContent({
  tweetData,
  against,
  judge,
  confirmStake
}) {
  const setStake = () => {
    confirmStake(tweetData.tweet, judge, against, tweetData.nonce, 1);
  };

  return (
    <PopupContainer>
      <Field>
        <label htmlFor="tweet">Tweet:</label>
        <input id="full-tweet-text" value={tweetData.tweet} readOnly />
      </Field>
      <Field>
        <label htmlFor="hash">Hash:</label>
        <input id="full-tweet-hash" value={tweetData.tweetDigest} readOnly />
      </Field>
      <Field>
        <label htmlFor="judge">Judge:</label>
        <input id="full-tweet-judge" value={judge.name} readOnly />
      </Field>
      <Field>
        <label htmlFor="against">Against:</label>
        <input id="full-tweet-judge" value={against.name} readOnly />
      </Field>
      <Field>
        <label htmlFor="stake">Stake:</label>
        <input id="full-tweet-stake" />
      </Field>
      <Button onClick={setStake}>Confirm</Button>
    </PopupContainer>
  );
}

const Field = styled("div")`
  margin: 5px 5px 5px 5px;
`;

const PopupContainer = styled("div")`
  width: 300px;
  height: 200px;
  background-color: white;
  border: 1px solid black;
  margin-top: 10px;
  position: absolute;
  z-index: 60;
`;

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
