import * as firebase from "firebase/app";
import "firebase/database";
import React, { Component } from "react";
import { getXurInventory } from "./Request";
import { Globals } from "./Globals";
import loader from "../images/loader.gif";

const firebaseConfig = {
  apiKey: "AIzaSyDRVpJJYpLK-rfh_felc9vDNr8u3K_8WI0",
  authDomain: "theix-3b6ee.firebaseapp.com",
  databaseURL: "https://theix-3b6ee.firebaseio.com",
  projectId: "theix-3b6ee",
  storageBucket: "theix-3b6ee.appspot.com",
  messagingSenderId: "739280273977",
  appId: "1:739280273977:web:d0adee2748cd5460"
};
firebase.initializeApp(firebaseConfig);

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
          firebase
            .database()
            .ref(item.itemHash.toString(10))
            .on("value", definition => {
              let newItem = {
                name: definition.val().displayProperties.name,
                type: definition.val().itemTypeAndTierDisplayName,
                icon: definition.val().displayProperties.icon,
                description: definition.val().displayProperties.description,
                itemType: definition.val().itemType,
                hash: definition.val().hash
              };
              this.setState(prevState => ({
                itemProperties: [...prevState.itemProperties, newItem]
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
  }

  render() {
    const { itemProperties, isLoading, error } = this.state;
    if (error) {
      return (
        <p className="loadingInfo">
          <span role="img" aria-label="warning">
            ⚠️
          </span>{" "}
          {error.message}
        </p>
      );
    }
    if (isLoading) {
      return <img className="loadingInfo" src={loader} alt="" />;
    }
    return (
      <ul className="item-list">
        {itemProperties.map(item => (
          <li key={item.hash} className="item">
            <img src={Globals.url.bungie + item.icon} alt="" />
            <span>
              <h3>{item.name}</h3>
              <h4>{item.type}</h4>
              <p className="italic">{item.description}</p>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default InventoryList;
