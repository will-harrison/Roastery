import React, { Component } from "react";
import { Route } from "react-router-dom";
import jwt from "jsonwebtoken";

class AuthenticatedRoute extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false
    };
  }

  // this is the criteria that the token passes to make sure a user is
  // authenticated. Starts with initial state of false.

  componentWillMount() {
    let token = localStorage.getItem("token");

    if (!token) {
      return this.setState(state => {
        return {
          authenticated: false
        };
      });
    }
    token = jwt.decode(token);

    // says that if there isn't a token, do not authenticate.
    // else, decode to authenticate.

    if (!token || !token.id) {
      return this.setState(state => {
        return {
          authenticated: false
        };
      });
    }
    return this.setState(state => {
      return {
        authenticated: true
      };
    });
  }

  // if no token or token id doesn't match, not authenticated.
  // if it all matches up, authenticate user and let them through.

  render() {
    let { authenticated } = this.state;

    return authenticated ? (
      <Route {...this.props} />
    ) : (
      <div>Please log into Roastery to continue</div>
    );
  }
}

export default AuthenticatedRoute;
