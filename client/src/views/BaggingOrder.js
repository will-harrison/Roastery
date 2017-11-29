import React, { Component } from "react";
import _ from 'lodash';
import api from "../api";
import PageHeader from "../components/PageHeader";

class BaggingOrder extends Component {
  constructor() {
    super();

    this.state = {
      orders: [],
      invType: ["bagged1", "bagged5", "bagged10", "bagged12oz"]
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
    let { orders, invType } = this.state;
    if (!orders) { <div>Loading</div> }
    return (
      <div>
        <PageHeader>Bag Order</PageHeader>
        {
          orders.map((order) => {
            return (
              <div>
                {order.item.name}
                {
                  invType.map((type) => {
                    let inv = order.inventory[type];

                    if (inv.onOrder < 1) return null;

                    return <div>
                      {inv.onOrder} {inv.type}

                    </div>
                  })
                }
              </div>
            )
          })
        }

      </div>
    );
  }
}

export default BaggingOrder;
