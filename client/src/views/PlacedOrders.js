import React, { Component } from "react";
import { format } from "date-fns";
import PageHeader from "../components/PageHeader";
import api from "../api";

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

export default PlacedOrders;
