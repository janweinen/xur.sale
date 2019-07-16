import React, { Component } from "react";
import XurHeader from "../images/xur.jpg";
import { Location } from "./Helpers";
//import Auth from "./Auth";

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
          <p>
            A peddler of strange curios, Xûr's motives are not his own. He bows
            to his distant masters, the Nine.
          </p>
          {/*<Auth />*/}
        </div>
      </div>
    );
  }
}

export default Hero;
