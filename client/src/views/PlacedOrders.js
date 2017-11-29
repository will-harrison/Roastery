import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import api from "../api";
import OnOrder from "../components/OnOrder";

class PlacedOrders extends Component {
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
      <div>No Pending Orders</div>;
    }
    return (
      <div>
        <PageHeader>Placed Orders</PageHeader>
        <OnOrder orders={orders} invTypes={invTypes} />
      </div>
    );
  }
}

export default PlacedOrders;
