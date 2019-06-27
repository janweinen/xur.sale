import React, { Component } from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

class Layout extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Hero />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Layout;
