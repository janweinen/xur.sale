import React, { Component } from "react";
import { Globals } from "./Globals";

const state =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const authURL =
  "https://www.bungie.net/de/oauth/authorize?client_id=" +
  Globals.client_id +
  "&response_type=code&state=" +
  state;

const url_string = window.location.href;
const url = new URL(url_string);
const code = url.searchParams.get("code");
//const stateID = url.searchParams.get("state");

if (code) {
  postData(Globals.url.oauth)
    .then(data => getUser(data.access_token).then(r => console.log(r)))
    .catch(error => console.error(error));
}

async function postData(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-API-Key": Globals.key.bungie,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: createFormParams({
      client_id: Globals.client_id,
      grant_type: "authorization_code",
      code
    })
  });
  return await response.json();
}

async function getUser(access_token) {
  const response = await fetch(
    "https://www.bungie.net/Platform/User/GetCurrentBungieNetUser/",
    {
      headers: {
        "X-API-Key": Globals.key.bungie,
        Authorization: "Bearer " + access_token
      }
    }
  );
  return await response.json();
}

function createFormParams(params) {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");
}

class Auth extends Component {
  render() {
    return (
      <div>
        <a href={authURL} className="login">
          © 2019 Jan Weinen 0.1.6
        </a>
      </div>
    );
  }
}

export default Auth;
