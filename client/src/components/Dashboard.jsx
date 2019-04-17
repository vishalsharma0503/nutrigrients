import React, { Component } from "react";
import "./Dashboard.css";
import ChartUtil from "./chartUtil";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    var token = props.match.params.token.split(":")[1];
    this.state = {
      jwttoken: "Bearer " + token,
      username: "",
      user: { _id: "", name: "" },
      age: "",
      height: "",
      weight: "",
      gender: "",
      allergies: "",
      conditions: "",
      foodType: [],
      bodyShape: [],
      idealPlate: {}
    };
    //console.log("TOKEN -> ", "Bearer " + token);
  }
  componentDidMount() {
    var newState;
    fetch("http://localhost:5000/api/profiles/myprofile", {
      crossDomain: true,
      method: "GET",
      headers: {
        Authorization: this.state.jwttoken
      }
    })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        newState = responseJson;
        this.setState({ jwttoken: this.state.jwttoken, ...newState });
        ChartUtil(responseJson.idealPlate);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div classname="wrapper">
        <div className="pc_wrapper">
          <div className="pc_wrapper2">
            <div className="pc">
              <div className="pcBox1">
                <div className="profile_pic" />
                <div className="profile_name">{this.state.user.name}</div>
              </div>
              <div className="pcBox2">
                <table className="pcBox2ValuesTable">
                  <tr>
                    <td className="c1">Age</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.age}</td>
                  </tr>
                  <tr>
                    <td className="c1">Height</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.height}</td>
                  </tr>
                  <tr>
                    <td className="c1">Weight</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.weight}</td>
                  </tr>
                  <tr>
                    <td className="c1">Gender</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.gender}</td>
                  </tr>
                  <tr>
                    <td className="c1">Food Type</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.foodType}</td>
                  </tr>
                  <tr>
                    <td className="c1">Allergies</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">
                      {this.state.allergies === undefined ||
                      this.state.allergies === null ||
                      (typeof this.state.allergies === "object" &&
                        this.state.allergies.length == 0)
                        ? "nil"
                        : this.state.allergies}
                    </td>
                  </tr>
                  <tr>
                    <td className="c1">Conditions</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">
                      {this.state.conditions === undefined ||
                      this.state.conditions === null ||
                      (typeof this.state.conditions === "object" &&
                        this.state.conditions.length == 0)
                        ? "nil"
                        : this.state.conditions}
                    </td>
                  </tr>
                  <tr>
                    <td className="c1">BodyShape</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.bodyShape}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="sep_line" />
            <div className="chart">
              <h1>My Ideal Plate</h1>
              <canvas id="pie-chart" width="600" height="450" />
            </div>
            <div className="chart_box">
              <div className="nutrients_details">
                <div className="category">CATEGORY :</div>
                <div className="category_value">
                  {this.state.idealPlate.category}
                </div>
                <table className="pcBox2ValuesTable">
                  <tr>
                    <td className="c1">Proteins</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.idealPlate.pro + " %"}</td>
                  </tr>
                  <tr>
                    <td className="c1">Fats</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.idealPlate.fat + " %"}</td>
                  </tr>
                  <tr>
                    <td className="c1">Carbs</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.idealPlate.carbs + " %"}</td>
                  </tr>
                  <tr>
                    <td className="c1">Fibres</td>
                    <td className="c2">&nbsp; : &nbsp;</td>
                    <td className="c3">{this.state.idealPlate.fibre + " %"}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
