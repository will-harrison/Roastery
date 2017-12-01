import React, { Component } from "react";
import api from "../api";
import { format } from "date-fns";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Order from '../components/Order';
import Navbar from "../containers/Navbar";

class BaggingOrder extends Component {
  constructor() {
    super();

    this.state = {
      orders: [],
      invTypes: ["bagged12oz", "bagged1", "bagged5", "bagged10"]
    };
  }

  getInventory = () => {
    let { invTypes } = this.state;
    api.order.getOrdersByInventoryType(invTypes).then(orders => {
      this.setState(state => {
        return {
          ...state,
          orders
        };
      });
    });
  };

  componentDidMount() {
    this.getInventory();
  }

  render() {
    let { orders, invTypes } = this.state;
    if (!orders) {
      <div>No Pending Orders</div>;
    }
    return (
      <div>
        <Navbar />
        <PageHeader>Bag Order</PageHeader>
        <Order orders={orders} complete={this.getInventory} orderType={"Bag"} />
      </div>
    );
  }
}

export default BaggingOrder;
