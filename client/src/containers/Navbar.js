import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      token: ""
    };
  }

  // sets intitial state of token to an empty string

  logout = () => {
    localStorage.removeItem("token");
    this.setState(state => {
      return {
        token: ""
      };
    });

    if (this.props.match.url === "/") {
      return (window.location = "/");
    }
    this.props.history.push("/");
  };

  // log out function -> deletes token to "un-authenticate" user and return an
  // empty token, then refreshes the page to change the navbar

  render() {
    return (
      <Container>
        <SLink to={"/"}>Home</SLink>
        <SLink to={"/inventory"}>Inventory</SLink>
        <SLink to={"/roast-order"}>Roast Orders</SLink>
        <SLink to={"/need"}>Placed Orders</SLink>
        <SLink to={"/bagging-order"}>Bagging Orders</SLink>
        <Span onClick={this.logout}>Log Out</Span>
      </Container>
    );
  }
}

// Navbar is only visible when the user is authenticated, so that
// an unauthenticated user can not access any of these paths.

const Container = styled.div`
  padding: 15px 15px;
  text-align: center;
  background-color: #476a6f;
`;

const SLink = styled(Link)`
  padding: 15px 15px;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #46351d;
  }
`;

const Span = styled.span`
  padding: 15px 15px;
  cursor: pointer;
  color: #fff;
  &:hover {
    color: #46351d;
  }
`;

export default withRouter(Navbar);
