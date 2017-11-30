import React, { Component } from "react";
import api from "../api";
import PageHeader from "../components/PageHeader";
import { format } from "date-fns";

class BaggingOrder extends Component {
  constructor() {
    super();

    this.state = {
      orders: [],
      invTypes: ["bagged12oz", "bagged1", "bagged5", "bagged10"]
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
        <PageHeader>Bag Order</PageHeader>
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

export default BaggingOrder;
