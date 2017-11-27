import React, { Component } from "react";
import api from "../api";

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

        this.props.history.push(`/profile`);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            required
            type={"email"}
            name={"email"}
            placeholder={"Email"}
            onChange={this.onInputChange}
          />
          <br />
          <input
            required
            type={"password"}
            name={"password"}
            placeholder={"Password"}
            onChange={this.onInputChange}
          />
          <br />
          <br />
          <input type={"submit"} value={"Login"} />
        </form>
      </div>
    );
  }
}

export default Login;
