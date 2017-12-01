import React, { Component } from "react";
import api from "../api";
import { Input } from "semantic-ui-react";
import styled from "styled-components";

class Login extends Component {
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
      .login(this.state.credentials)
      .then(user => {
        localStorage.setItem("token", user.token);

        this.props.history.push(`/`);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Container>
        <h1>Login</h1>
        <form onSubmit={this.onFormSubmit}>
          <Input
            required
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={this.onInputChange}
          />
          <br />
          <Input
            required
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            onChange={this.onInputChange}
          />
          <br />
          <br />
          <Input type={"submit"} value={"Login"} />
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

export default Login;
