import React, { Component } from "react";
import pkg from "../../package.json";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>
          &copy; 2019 Jan Weinen <span>{pkg.version}</span>
        </p>
      </footer>
    );
  }
}

export default Footer;
