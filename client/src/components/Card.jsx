import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {};
  pushToViewPosts = () => {
    this.props.history.push(
      "/viewposts/" + this.props.userid + "/" + this.props.token
    );
  };
  render() {
    return (
      <span className="card_layer">
        <div className="overlay_button" onClick={this.pushToViewPosts}>
          View
          <br />
          Stories
        </div>
        <div className="follow_button">Follow</div>
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
