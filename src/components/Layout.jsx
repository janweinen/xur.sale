import React from "react";

import App from "./app";
import Header from "./Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <App />
      </div>
    );
  }
}
