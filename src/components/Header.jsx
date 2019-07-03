import React, { Component } from "react";
import LogoSVG from "./LogoSVG";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <LogoSVG />
        </div>
        <div className="title">
          <h1>XÛR</h1>
          <p>Agent of The Nine</p>
        </div>
      </header>
    );
  }
}

export default Header;
