import React, { Component } from "react";
import api from "../api";
import PageHeader from "../components/PageHeader";

class BaggingOrder extends Component {
  constructor() {
    super();

    this.state = {
      orders: [],
      bagTypes: ["bagged1", "bagged5", "bagged10", "bagged12oz"]
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

        {orders.map(order => {
        })}

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
