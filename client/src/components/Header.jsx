import React, { Component } from "react";
import {Link} from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
         Home
        </Link>
        <Link to="/dashboard">
         My Ideal Plate
        </Link>
        <Link to="/Logout">
         Log out
        </Link>
      </div>
    );
  }
}
export default Header;
