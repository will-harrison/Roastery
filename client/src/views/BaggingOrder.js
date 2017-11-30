import React, { Component } from "react";
import api from "../api";
import PageHeader from "../components/PageHeader";
import OnOrder from "../components/OnOrder";

class BaggingOrder extends Component {
  constructor() {
    super();

    this.state = {
      orders: [],
      invTypes: ["bagged1", "bagged5", "bagged10", "bagged12oz"]
    };
  }

  componentDidMount() {
    api.inventory.getAll().then(data => {
      this.setState(state => {
        return {
          orders: data
        };
      });
    });
  }
  render() {
    let { orders, invTypes } = this.state;
    if (!orders) {
      <div>Loading</div>;
    }
    return (
      <div>
        <PageHeader>Bag Order</PageHeader>
        <OnOrder orders={orders} invTypes={invTypes} />
      </div>
    );
  }
}

export default BaggingOrder;
