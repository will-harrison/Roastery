import React, { Component } from "react";
import api from "../api";
import styled from "styled-components";
import { Input } from "semantic-ui-react";

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      credentials: {}
    };
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        credentials: {
          ...state.credentials,
          [changeEvent.target.name]: changeEvent.target.value
        }
      };
    });
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();

    api.users
      .signup(this.state.credentials)
      .then(user => {
        this.props.history.push(`/login`);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Container>
        <h1>Signup</h1>
        <form onSubmit={this.onFormSubmit}>
          <Input
            required
            size="huge"
            type={"text"}
            name={"companyName"}
            placeholder={"CompanyName"}
            onChange={this.onInputChange}
          />
          <br />
          <Input
            required
            size="huge"
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={this.onInputChange}
          />
          <br />
          <Input
            required
            size="huge"
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            onChange={this.onInputChange}
          />
          <br />
          <br />
          <Input type={"submit"} value={"Signup"} />
        </form>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default Signup;
