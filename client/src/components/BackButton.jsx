import "./BackButton.css";
import React, { Component } from "react";
class BackButton extends Component {
  state = {};
  pushToDashboard = () => {
    this.props.history.push("/dashboard/" + this.props.token);
  };
  render() {
    return <div className="back_button" onClick={this.pushToDashboard} />;
  }
}

export default BackButton;
