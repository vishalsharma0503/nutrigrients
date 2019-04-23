import React, { Component } from "react";
import Card from "./Card";
import Header from "./Header";
import "./FitHerd.css";
// const jumbotron_style = {
//   "text-align": "center"
// };
class FitHerd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      cards: [],
      lengthCount: 0
    };
    var token = "Bearer " + props.match.params.token;
    console.log("Starting profiles fetch");
    fetch("http://localhost:5000/api/profiles/all", {
      crossDomain: true,
      method: "GET",
      headers: { Authorization: token }
    })
      .then(res => {
        return res.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        var cards = [];
        this.pushIntoCards(cards, responseJson, responseJson.length);
        this.setState({
          result: responseJson,
          cards: cards,
          lengthCount: responseJson.length
        });
      });
  }
  pushIntoCards = (cards, responseJson, count) => {
    for (var i = 0; i < count; i++) {
      cards.push(
        <Card
          profile_username={responseJson[i].username}
          category={responseJson[i].idealPlate.category}
        />
      );
    }
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <span className="heading1">THE FIT HERD</span>
          </div>
        </div>
        <div className="cards_group_container">
          <div className="cards_group">{this.state.cards}</div>
        </div>
      </div>
    );
  }
}

export default FitHerd;
//E9ECEF Jumbotron initial color
//00B2F6 button blue
