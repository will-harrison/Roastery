import React, { Component } from "react";
import api from "../api";
import OnOrder from "../components/OnOrder";
import PageHeader from "../components/PageHeader";

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
          <div key={order.id}>
            <div>{order.item.name}</div>
            <div>{order.orderQty}</div>
            <div>{format(order.dueDate, "MM/DD/YY")}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default RoastOrder;
