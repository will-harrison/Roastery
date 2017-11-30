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
      if (this.props.match.url === "/roast-order") {
        return (window.location = "/roast-order");
      }
      this.getInventory();
    });
  };

  render() {
    let { orders, invTypes } = this.state;
    return (
      <div>
<<<<<<< HEAD
        <OnOrder orders={orders} invTypes={invTypes} />
=======
        <PageHeader>Roast Orders</PageHeader>

        {orders.map(order => (
          <Order key={order.id}>
            <Name>{order.item.name}</Name>
            <Qty>{order.orderQty} lbs on order</Qty>
            <SDate>Due {format(order.dueDate, "MM/DD/YY")}</SDate>
            <Button onClick={() => this.closeOrder(order.id)}>Roast</Button>
          </Order>
        ))}
>>>>>>> 524dd1a9f4976a5afa03a7de0fb36327ff7e3e6e
      </div>
    );
  }
}

export default RoastOrder;
