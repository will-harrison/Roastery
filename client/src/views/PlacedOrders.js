import React, { Component } from "react";
import { format } from "date-fns";
import styled from 'styled-components';
import PageHeader from "../components/PageHeader";
import api from "../api";
import { Order, Name, Qty, SDate, Button } from "../components/Order";

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
            <Button>Recieve</Button>
          </Order>
        ))}
      </div>
    );
  }
}



export default PlacedOrders;
