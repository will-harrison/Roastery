import React, { Component } from "react";
import api from "../api";
import styled from "styled-components";
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
  getAllItems = () => {
    api.items
      .getItems()
      .then(data => {
        this.setState(state => {
          return {
            ...state,
            items: data
          };
        });
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.getAllItems();
  }
  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();
    let item = {
      name: this.state.name,
      description: this.state.description
    };
    api.items
      .createItem(item)
      .then(() => this.getAllItems())
      .catch(err => console.log(err));
  };
  render() {
    let { items } = this.state;
    return (
      <div>
        <Title>Add Item</Title>
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
          <List key={item.id}>
            <Name>{item.name}</Name>
            <div>{item.description}</div>
          </List>
        ))}
      </div>
    );
  }
}

const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #46351d;
  margin: 0;
  padding: 10px;
`;
const List = styled.div`
  font-size: 16px;
  color: #46351d;
  margin: 5px;
  padding: 10px;
  paddingleft: 15px;

  &:hover {
    background-color: #476a6f;
    color: #fdf5e6;
  }
`;
const Name = styled.div`font-size: 20px;`;

export default AddItem;
