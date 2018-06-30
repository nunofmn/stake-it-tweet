import styled, { css } from "react-emotion";
import React from "react";

export default class App extends React.Component {
  componentDidMount() {
    /*
     *browser.runtime.sendMessage({ type: "hello" }).then(response => {
     *  console.log("Response: ", response);
     *});
     */
  }

  render() {
    return <Title>Full of tweet!</Title>;
  }
}

const Title = styled("h1")`
  color: red;
`;
