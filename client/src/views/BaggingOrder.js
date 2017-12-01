import React, { Component } from "react";
import api from "../api";
import { format } from "date-fns";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Order from '../components/Order';

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

  closeOrder = (id, itemId, qty, inventoryType) => {
    console.log(id);
    api.order.close(id).then(() => {
      api.inventory.update(itemId, { qty, inventoryType, orderStatus: "onHand" })
      qty = -qty;
      api.inventory.update(itemId, { qty, inventoryType, orderStatus: "onOrder" })
      this.getInventory();
    });
  };

  render() {
    let { orders, invTypes } = this.state;
    if (!orders) {
      <div>No Pending Orders</div>;
    }
    return (
      <div>
        <PageHeader>Bag Order</PageHeader>
        <Order orders={orders} />
      </div>
    );
  }
}

export default BaggingOrder;
