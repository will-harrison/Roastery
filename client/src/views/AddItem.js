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
    api.items
      .createItem(item)
      .then(data => {
        let items = [];
        for (item in data) {
          items.push(item);
        }

        this.setState(state => {
          return {
            ...state,
            items: items
          };
        });
      })
      .catch(err => console.log(err));
  };
  render() {
    let { items } = this.state;
    return (
      <div>
        <h1>Add Item</h1>
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
        {items.map(item => (
          <div key={item.id}>
            <div>Coffee Name:{item.name}</div>
            <div>Description:{item.discription}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default AddItem;
