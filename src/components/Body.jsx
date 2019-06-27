import React, { Component } from "react";
import InventoryList from "./InventoryList";

class Footer extends Component {
  render() {
    return (
      <main>
        <hr />
        <h4>INVENTORY</h4>
        <h2>EXOTIC GEAR AND ITEMS</h2>
        <InventoryList />
      </main>
    );
  }
}

export default Footer;
