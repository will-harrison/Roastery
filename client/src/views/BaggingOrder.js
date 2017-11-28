import React, { Component } from "react";
import api from "../api";
import PageHeader from "../components/PageHeader";
class BaggingOrder extends Component {
  constructor() {
    super();

    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    api.inventory.getAll().then(data => {
      this.setState(state => {
        return {
          orders: data
        };
      });
    });
  }
  render() {
    let { orders } = this.state;
    console.log(orders);
    return (
      <div>
        <PageHeader>Bag Order</PageHeader>

        {orders.map(order => (
          <div>
            {order.item.name}
            <button>Bag</button>
          </div>
        ))}
      </div>
    );
  }
}

export default BaggingOrder;
