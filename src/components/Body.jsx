import React, { Component } from "react";
import InventoryList from "./InventoryList";

class Body extends Component {
  render() {
    return (
      <main>
        <hr />
        <h2>Inventory</h2>
        <InventoryList />
      </main>
    );
  }
}

export default Body;
