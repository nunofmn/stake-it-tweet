import styled, { css } from "react-emotion";
import React from "react";

export default function PopupContent({ tweetData }) {
  return (
    <PopupContainer>
      <Field>
        <label htmlFor="tweet">Tweet:</label>
        <input id="full-tweet-text" value={tweetData.tweet} readOnly />
      </Field>
      <Field>
        <label htmlFor="judge">Judge:</label>
        <input id="full-tweet-judge" />
      </Field>
      <Field>
        <label htmlFor="stake">Stake:</label>
        <input id="full-tweet-stake" />
      </Field>
    </PopupContainer>
  );
}

const Field = styled("div")`
  margin: 5px 5px 5px 5px;
`;

const PopupContainer = styled("div")`
  width: 300px;
  background-color: white;
  border: 1px solid black;
  margin-top: 10px;
  position: absolute;
  z-index: 60;
`;
