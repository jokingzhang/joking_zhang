import React, { Component } from "react";
import { Draggable } from "gsap/all";

class Mouse extends Component {
  componentDidMount = () => new Draggable(this.ELEMENT);

  render() {
    return (
      <div ref={e => (this.ELEMENT = e)} className="cat" role="img">
        <span>🐭</span>
      </div>
    );
  }
}

export default Mouse;
