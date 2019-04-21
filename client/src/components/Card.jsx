import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {};
  render() {
    return (
      <span className="card_layer">
        <div className="overlay_button">Click</div>
        <span className="card_grid">
          <span className="card_section1">
            <div className="card_profile_pic_container">
              <img src="" />
            </div>
            <span className="card_username">{this.props.profile_username}</span>
          </span>
          <div className="card_section2">
            <div className="card_category">{this.props.category}</div>
          </div>
        </span>
      </span>
    );
  }
}

export default Card;
