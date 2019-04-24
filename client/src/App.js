import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import CreateProfile from "./components/CreateProfile";
import CreatePost from "./components/CreatePost.jsx";
import FitHerd from "./components/FitHerd";
import ViewPosts from "./components/ViewPosts";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Route exact path="/" component={Landing} />
          <div className="c">
            <Route exact path="/register" component={Register} />
            <Route exact path="/createpost/:token" component={CreatePost} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/createprofile/:token"
              component={CreateProfile}
            />
            <Route exact path="/thefitherd/:token" component={FitHerd} />
            <Route exact path="/editprofile/:token" component={EditProfile} />
            <Route exact path="/dashboard/:token" component={Dashboard} />
            <Route
              exact
              path="/viewposts/:id/:token"
              component={ViewPosts}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
