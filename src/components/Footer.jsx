import React, { Component } from "react";
//import pkg from "../../package.json";
import Auth from "./Auth";

class Footer extends Component {
  render() {
    return (
      <footer>
        {/*<p>
          &copy; 2019 Jan Weinen <span>{pkg.version}</span>
        </p>*/}
        <Auth />
      </footer>
    );
  }
}

export default Footer;
