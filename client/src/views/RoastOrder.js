import React, { Component } from "react";
import api from "../api";
import OnOrder from "../components/OnOrder";
import PageHeader from "../components/PageHeader";
import { Order, Name, Qty, SDate, Button } from "../components/Order";

import { format } from "date-fns";

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
            <Button>Roast</Button>
          </Order>
        ))}
      </div>
    );
  }
}

export default RoastOrder;
