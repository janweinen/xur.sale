import CookieConsent from "react-cookie-consent";
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
        <CookieConsent style={{ background: "#2c4b29" }}>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    );
  }
}

export default Layout;
