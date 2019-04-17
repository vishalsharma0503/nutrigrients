import React, { Component } from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <Link className="btn btn-lg btn-info mr-2" to="/">
      Homepage
    </Link>
    <Link className="btn btn-lg btn-info mr-2" to="/login">
      Login
    </Link>
    <Link className="btn btn-lg btn-info mr-2" to="/register">
      Sign Up
    </Link>
  </div>
);

export default NotFound;
