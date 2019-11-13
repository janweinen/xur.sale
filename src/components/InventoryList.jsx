import { firebaseRequest } from "./FirebaseRequest";
import { getXurInventory } from "./BungieRequest";
import { Globals } from "./Globals";
import loader from "../images/loader.gif";
//import Perks from "./Perks";
import React, { Component } from "react";
//import { storeInventory } from "./FirebaseRequest";
import { firestoreRequest } from "./FirebaseRequest";

class InventoryList extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      isLoading: false,
      error: null,
      planet: ""
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    firestoreRequest().then(result => {
      this.setState({ planet: result });
    });
    getXurInventory()
      .then(result => {
        Object.values(result.Response.sales.data[2190858386].saleItems).map(
          item =>
            firebaseRequest(item.itemHash.toString(10)).then(result => {
              this.setState(prevState => ({
                inventory: [...prevState.inventory, result]
              }));
            })
        );
      })
      .then(() =>
        this.setState({
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
    //storeInventory(this.state.inventory);
  }

  render() {
    const { inventory, isLoading, error, planet } = this.state;
    const itemList = inventory.map(item => (
      <li className="item" key={item.hash} data-hash={item.hash}>
        <img src={Globals.url.bungie + item.displayProperties.icon} alt="" />
        <span>
          <h3>{item.displayProperties.name}</h3>
          <p>{item.itemTypeDisplayName}</p>
          {/*<Perks item={item} />*/}
          {/*<p className="italic">{item.displayProperties.description}</p>*/}
        </span>
      </li>
    ));

    if (error) {
      return (
        <p className="loadingInfo">
          <span role="img" aria-label="warning">
            ⚠️
          </span>{" "}
          Bungie's servers are down for maintenance! Error Message:{" "}
          {error.message};
        </p>
      );
    }
    if (isLoading) {
      return <img className="loadingInfo" src={loader} alt="" />;
    }
    if (planet === "") {
      return (
        <p className="inventoryInfo">
          Xûr has disappeared! He will return on Friday!
        </p>
      );
    } else {
      return <ul className="item-list">{itemList}</ul>;
    }
  }
}

export default InventoryList;
