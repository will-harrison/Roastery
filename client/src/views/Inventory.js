import React, { Component } from "react";
import styled from 'styled-components';
import api from '../api';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filters: {},
      sortOrder: ["greenBulk", "roastedBulk", "bagged10", "bagged5", "bagged1", "bagged12oz"]
    }
  }

  componentDidMount() {
    api.inventory.getAll().then(items => {
      this.setState(state => {
        return {
          ...state,
          items
        }
      })
    })
  }

  render() {
    let { items, sortOrder } = this.state;
    console.log(this.state)
    return (
      <div>
        {items.map(i => (
          <Item key={i.id}>
            <ItemName>{i.name}</ItemName>
            <ItemDescription>{i.description}</ItemDescription>
          </Item>
        ))}
      </div>
    );
  }
}

const Item = styled.div``;

const ItemName = styled.div``;

const ItemDescription = styled.div``;

export default Inventory;
