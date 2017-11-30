import React, { Component } from "react";
import api from "../api";
import PageHeader from "../components/PageHeader";
import { format } from "date-fns";
import { Order, Name, Qty, SDate, Button } from "../components/Order";
import styled from "styled-components";

class RoastOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      invTypes: ["roastedBulk"]
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
      if (this.props.match.url === "/roast-order") {
        return (window.location = "/roast-order");
      }
      this.props.history.push("/roast-order");
    });
  };

  render() {
    let { orders, invTypes } = this.state;
    return (
      <div>
        <PageHeader>Roast Orders</PageHeader>

        {orders.map(order => (
          <Order key={order.id}>
            <Name>{order.item.name}</Name>
            <Qty>{order.orderQty} lbs on order</Qty>
            <SDate>Due {format(order.dueDate, "MM/DD/YY")}</SDate>
            <Button onClick={() => this.closeOrder(order.id)}>Roast</Button>
          </Order>
        ))}
      </div>
    );
  }
}

export default RoastOrder;
