import React, { Component } from "react";
import api from "../api";
import PageHeader from "../components/PageHeader";
import { format } from "date-fns";
import { Order, Name, Qty, SDate, Button } from "../components/Order";
import styled from "styled-components";

class PlacedOrders extends Component {
  constructor() {
    super();

    this.state = {
      orders: [],
      invTypes: ["greenBulk"]
    };
  }

  componentDidMount() {
    let { invTypes } = this.state;
    api.order.getOrdersByInventoryType(invTypes).then(orders => {
      this.setState(state => {
        return {
          ...state,
          orders
        };
      });
    });
  }

  closeOrder = id => {
    console.log(id);
    api.order.close(id).then(() => {
      if (this.props.match.url === "/placed-orders") {
        return (window.location = "/placed-orders");
      }
      this.props.history.push("/placed-orders");
    });
  };

  render() {
    console.log(this.state);
    let { orders, invTypes } = this.state;
    if (!orders) {
      <div>No Pending Orders</div>;
    }
    return (
      <div>
        <PageHeader>Placed Orders</PageHeader>
        {orders.map(order => (
          <Order key={order.id}>
            <Name>{order.item.name}</Name>
            <Qty>{order.orderQty} lbs on order</Qty>
            <SDate>Due {format(order.dueDate, "MM/DD/YY")}</SDate>
            <Button onClick={() => this.closeOrder(order.id)}>Recieve</Button>
          </Order>
        ))}
      </div>
    );
  }
}

export default PlacedOrders;
