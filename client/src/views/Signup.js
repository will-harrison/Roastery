import React, { Component } from "react";
import api from "../api";

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
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            required
            type={"text"}
            name={"companyName"}
            placeholder={"CompanyName"}
            onChange={this.onInputChange}
          />
          <br />
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
          <input type={"submit"} value={"Signup"} />
        </form>
      </div>
    );
  }
}

export default Signup;
