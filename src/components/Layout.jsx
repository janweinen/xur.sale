import React, { Component } from "react";

import App from "./app";
import Header from "./Header";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <App />
      </div>
    );
  }
}

export default Layout;
