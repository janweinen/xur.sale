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
    let visiblePerks = [
      635551670,
      3497077129,
      3956125808,
      4076485920,
      1255556128,
      2130769292
    ];
    if (this.props.item.sockets) {
      this.props.item.sockets.socketEntries.map(e => {
        if (e.reusablePlugItems && visiblePerks.includes(e.socketTypeHash)) {
          e.reusablePlugItems.map(p =>
            firebaseRequest(p.plugItemHash.toString(10)).then(result => {
              this.setState(prevState => ({
                perks: [...prevState.perks, result]
              }));
            })
          );
        }
      });
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

/*
Object.keys(reusablePlugItems).map(perks =>
          
        )

*/
