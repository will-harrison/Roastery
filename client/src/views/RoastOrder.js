import React, { Component } from "react";
<<<<<<< HEAD
import PageHeader from "../components/PageHeader";
=======
import api from '../api';
import OnOrder from '../components/OnOrder';
>>>>>>> 5d1d4a132756971c520fbe2a6426e2e0ac31280a

class RoastOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      invTypes: ["roastedBulk"]
    };
  }

  componentDidMount() {
    api.inventory.getAll().then(orders => {
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
<<<<<<< HEAD
        <PageHeader>RoastOrder</PageHeader>
=======
        <OnOrder orders={orders} invTypes={invTypes} />
>>>>>>> 5d1d4a132756971c520fbe2a6426e2e0ac31280a
      </div>
    );
  }
}

export default RoastOrder;
