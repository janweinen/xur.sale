import { firebaseRequest } from "./FirebaseRequest";
import { getXurInventory } from "./BungieRequest";
import { Globals } from "./Globals";
import loader from "../images/loader.gif";
import React, { Component } from "react";

class InventoryList extends Component {
  constructor() {
    super();

    this.state = {
      saleItems: [],
      itemProperties: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    getXurInventory()
      .then(result =>
        this.setState({
          saleItems: Object.values(result.sales.data[2190858386].saleItems)
        })
      )
      .then(() => {
        this.state.saleItems.map(item =>
          firebaseRequest(item.itemHash.toString(10)).then(result =>
            this.setState(prevState => ({
              itemProperties: [...prevState.itemProperties, result]
            }))
          )
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
  }

  render() {
    const { itemProperties, isLoading, error } = this.state;
    const itemList = itemProperties.map(item => (
      <li key={item.hash} className="item">
        <img src={Globals.url.bungie + item.displayProperties.icon} alt="" />
        <span>
          <h3>{item.displayProperties.name}</h3>
          <h4>{item.displayProperties.type}</h4>
          <p className="italic">{item.displayProperties.description}</p>
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
    return <ul className="item-list">{itemList}</ul>;
  }
}

export default InventoryList;
