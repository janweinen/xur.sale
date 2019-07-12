import { firebaseRequest } from "./FirebaseRequest";
import { Globals } from "./Globals";
import React, { Component } from "react";

class Perks extends Component {
  constructor() {
    super();

    this.state = {
      perks: []
    };
  }
  componentDidMount() {
    if (this.props.item.sockets) {
      this.props.item.sockets.socketEntries.map(perks =>
        firebaseRequest(perks.singleInitialItemHash.toString(10)).then(
          result => {
            this.setState(prevState => ({
              perks: [...prevState.perks, result]
            }));
          }
        )
      );
    }
  }
  render() {
    const { perks } = this.state;
    return perks.map((perk, index) => (
      <img
        className="perk-image"
        key={index}
        src={Globals.url.bungie + perk.displayProperties.icon}
        alt=""
        title={perk.displayProperties.name}
      />
    ));
  }
}

export default Perks;
