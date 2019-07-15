import React, { Component } from "react";
import XurHeader from "../images/xur.jpg";
import { Location } from "./Helpers";

const planet = "titan";

class Hero extends Component {
  render() {
    return (
      <div>
        <div
          className="image"
          style={{ backgroundImage: `url(${XurHeader})` }}
        />
        <div className="description">
          <h2>{Location(planet)}</h2>
          <p className="italic">
            A peddler of strange curios, Xûr's motives are not his own. He bows
            to his distant masters, the Nine.
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
