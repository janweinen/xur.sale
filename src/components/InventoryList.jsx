import * as firebase from "firebase/app";
import "firebase/database";
import React, { Component } from "react";
import axios from "axios";

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

const BUNGIE = "https://www.bungie.net";
const PATH = "/Platform/Destiny2/Vendors/?components=";
const COMPONENTS = "402";

class App extends Component {
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
    let config = { "X-API-Key": "eab9e06fbeb94a13a658b52b505ac2b1" };
    axios
      .get(BUNGIE + PATH + COMPONENTS, {
        headers: config
      })
      .then(result =>
        this.setState({
          saleItems: Object.values(
            result.data.Response.sales.data[2190858386].saleItems
          ),
          isLoading: false
        })
      )
      .then(() => {
        for (let item in this.state.saleItems) {
          if (this.state.saleItems.hasOwnProperty(item)) {
            firebase
              .database()
              .ref(this.state.saleItems[item].itemHash.toString(10))
              .on("value", definition => {
                const newItem = {
                  name: definition.val().displayProperties.name,
                  type: definition.val().itemTypeAndTierDisplayName,
                  icon: definition.val().displayProperties.icon,
                  description: definition.val().displayProperties.description
                };
                this.setState(prevState => ({
                  itemProperties: [...prevState.itemProperties, newItem]
                }));
              });
          }
        }
      })
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
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <ul className="item-list">
        {itemProperties.map((item, index) => (
          <li key={index} className="item">
            <img src={BUNGIE + item.icon} alt="" />
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

export default App;
