import React, { Component } from "react";

class FitHerd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
    var token = "Bearer " + props.match.params.token;
    console.log("Starting profiles fetch");
    fetch("http://localhost:5000/api/profiles/all", {
      crossDomain: true,
      method: "GET",
      headers: { Authorization: token }
    }).then(res => {
      console.log(res);
      this.setState({ result: res });
    });
  }
  componentDidMount() {}
  render() {
    return <div>{this.state.result}</div>;
  }
}

export default FitHerd;
