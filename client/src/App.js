import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
        <h1>Yahan mast mast sunadariyon ki image hogi</h1>
      </div>
      </Router>
    );
  }
}

export default App;
