import React, { Component } from "react";
import { Globals } from "./Globals";
import { requestAuthorization } from "./BungieRequest";
import { getMembershipsForCurrentUser } from "./BungieRequest";
import { storeUser } from "./FirebaseRequest";

const authURL =
  Globals.url.oauth +
  "?client_id=" +
  Globals.client_id +
  "&response_type=code&state=" +
  Math.random()
    .toString(36)
    .substring(2, 15);

const url_string = window.location.href;
const url = new URL(url_string);
const code = url.searchParams.get("code");
//const stateID = url.searchParams.get("state");

if (code) {
  requestAuthorization()
    .then(data =>
      getMembershipsForCurrentUser(data.access_token).then(data => {
        storeUser(data);
      })
    )
    .catch(error => console.error(error));
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
