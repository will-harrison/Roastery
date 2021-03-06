import React, { Component } from "react";
import api from "../api";
import { format } from "date-fns";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Order from '../components/Order';
import Navbar from "../containers/Navbar";

class RoastOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      invTypes: ["roastedBulk"]
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
    return (
      <div>
        <Navbar />
        <PageHeader>Roast Orders</PageHeader>
        <Order orders={orders} complete={this.getInventory} orderType={"Roast"} />
      </div >
    );
  }
}

export default RoastOrder;
