import React, { Component } from "react";
import "./Dashboard.css";
import ChartUtil from "./chartUtil";

class ProfileCard extends Component {
  state = {};
  componentDidMount() {
    ChartUtil();
  }
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
          <div className="chart">
            <canvas id="pie-chart" width="600" height="450" />
          </div>
          <div className="chart_details" />
        </div>
      </div>
    );
  }
}

export default ProfileCard;
