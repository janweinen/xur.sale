import React, { Component } from "react";
import InventoryList from "./InventoryList";
import { Location } from "./Helpers";

const planet = "nessus";

class Footer extends Component {
  render() {
    return (
      <main>
        <hr />
        <h4>LOCATION</h4>
        <h2>{Location(planet)}</h2>
        <InventoryList />
      </main>
    );
  }
}

export default Footer;
