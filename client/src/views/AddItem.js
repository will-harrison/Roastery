import React, { Component } from "react";
import api from "../api";
class AddItem extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      items: []
    };
  }
  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        [changeEvent.target.name]: changeEvent.target.value
      };
    });
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();
    let item = this.state.name + this.state.description;
    api.items.createItem(item).catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <h1>AddItem</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder={`Name, Example: Ethiopia Guji Kercha`}
            onChange={this.onInputChange}
            name={"name"}
            type="text"
          />
          <input
            placeholder={"Description"}
            onChange={this.onInputChange}
            name={"description"}
            type="text"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddItem;
