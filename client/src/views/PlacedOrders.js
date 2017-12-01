import React, { Component } from "react";
import api from "../api";
import { format } from "date-fns";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Order from '../components/Order';
import Navbar from "../containers/Navbar";

class PlacedOrders extends Component {
  constructor() {
    super();

    this.state = {
      orders: [],
      invTypes: ["greenBulk"]
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
      return <div>No Pending Orders</div>;
    }
    return (
      <div>
        <Navbar />
        <PageHeader>Placed Orders</PageHeader>
        <Order orders={orders} complete={this.getInventory} orderType={"Recieve"} />
      </div>
    );
  }
}

export default PlacedOrders;
