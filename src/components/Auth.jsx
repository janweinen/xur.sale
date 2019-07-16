import React, { Component } from "react";

const state =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const authURL =
  "https://www.bungie.net/de/oauth/authorize?client_id=23891&response_type=code&state=" +
  state;

class Auth extends Component {
  render() {
    return (
      <div>
        <a href={authURL}>auth</a>
      </div>
    );
  }
}

export default Auth;
