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
        <Img
          img
          src="http://leafandbeancoffeeco.com/wp-content/uploads/2015/07/Beans.png"
          alt="pic"
        />
        <div>
          <SLink to={"/"}>Home</SLink>
        </div>
        <div>
          <SLink to={"/inventory"}>Inventory</SLink>
        </div>
        <div>
          <SLink to={"/roast-order"}>Roast Orders</SLink>
        </div>
        <div>
          <SLink to={"/need"}>Placed Orders</SLink>
        </div>
        <div>
          <SLink to={"/bagging-order"}>Bagging Orders</SLink>
        </div>
        <div>
          <Span onClick={this.logout}>Log Out</Span>
        </div>
      </Container>
    );
  }
}

// Navbar is only visible when the user is authenticated, so that
// an unauthenticated user can not access any of these paths.

const Container = styled.div`
  padding: 15px 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #476a6f;
`;

const Img = styled.img`
  height: 35px;
  justify-content: center;
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
