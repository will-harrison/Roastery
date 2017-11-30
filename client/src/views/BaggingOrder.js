import React, { Component } from "react";
import api from "../api";
import PageHeader from "../components/PageHeader";
import { format } from "date-fns";
import { Order, Name, Qty, SDate, Button } from "../components/Order";
import styled from "styled-components";

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

  closeOrder = id => {
    console.log(id);
    api.order.close(id).then(() => {
      if (this.props.match.url === "/bagging-order") {
        return (window.location = "/bagging-order");
      }
      this.getInventory();
    });
  };

  render() {
    console.log(this.state);
    let { orders, invTypes } = this.state;
    if (!orders) {
<<<<<<< HEAD
      <div>Loading</div>;
=======
      <div>No Pending Orders</div>;
>>>>>>> 524dd1a9f4976a5afa03a7de0fb36327ff7e3e6e
    }
    return (
      <div>
        <PageHeader>Bag Order</PageHeader>
<<<<<<< HEAD
        <OnOrder orders={orders} invTypes={invTypes} />
=======
        {orders.map(order => (
          <Order key={order.id}>
            <Name>{order.item.name}</Name>
            <Qty>{order.orderQty} lbs on order</Qty>
            <SDate>Due {format(order.dueDate, "MM/DD/YY")}</SDate>
            <Button onClick={() => this.closeOrder(order.id)}>Bag</Button>
          </Order>
        ))}
>>>>>>> 524dd1a9f4976a5afa03a7de0fb36327ff7e3e6e
      </div>
    );
  }
}

export default BaggingOrder;
