import React, { Component } from "react";
import "./Dashboard.css";

class ProfileCard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="pc_wrapper">
          <div className="pc">
            <div className="pcBox1">
              <div className="profile_pic" />
              <div className="profile_name">VIKRANT GIRI</div>
            </div>
            <div className="pcBox2">Age : 22</div>
          </div>
          <div className="sep_line" />
          <div className="chart" />
          <div className="chart_details" />
        </div>
      </div>
    );
  }
}

export default ProfileCard;
