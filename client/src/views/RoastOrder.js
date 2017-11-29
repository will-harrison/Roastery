import React, { Component } from "react";
import api from '../api';
import OnOrder from '../components/OnOrder';

class RoastOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      invTypes: ["roastedBulk"]
    };
  }

  componentDidMount() {
    api.inventory.getAll().then(orders => {
      this.setState(state => {
        return {
          ...state,
          orders
        };
      });
    });
  }

  render() {
    let { orders, invTypes } = this.state;
    return (
      <div>
        <OnOrder orders={orders} invTypes={invTypes} />
      </div>
    );
  }
}

export default RoastOrder;
