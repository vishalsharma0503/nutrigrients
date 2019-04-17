import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
        <Route exact path="/" component={Landing}/>
        <div className="container">
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route></div>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
