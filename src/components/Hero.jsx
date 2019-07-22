import React, { Component } from "react";
import XurHeader from "../images/xur.jpg";
import { Location } from "./Helpers";
import { firestoreRequest } from "./FirebaseRequest";

class Hero extends Component {
  constructor() {
    super();

    this.state = {
      planet: ""
    };
  }

  componentDidMount() {
    firestoreRequest().then(result => {
      this.setState({ planet: result });
    });
  }

  render() {
    const { planet } = this.state;
    return (
      <div>
        <div
          className="image"
          style={{ backgroundImage: `url(${XurHeader})` }}
        />
        <div className="description">
          <h2>{Location(planet)}</h2>
          <p>
            A peddler of strange curios, Xûr's motives are not his own. He bows
            to his distant masters, the Nine.
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
