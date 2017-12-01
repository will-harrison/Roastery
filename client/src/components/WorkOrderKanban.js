import React, { Component } from "react";

import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";

import WorkOrderStatusColumn from "./WorkOrderStatusColumn";
import WorkOrder from "./WorkOrder";

import api from "../api";

const statuses = [
  {
    value: ["greenBulk"],
    label: "To Be Received",
    accepts: []
  },
  {
    value: ["roastedBulk"],
    label: "To be Roasted",
    accepts: []
  },
  {
    value: ["bagged10", "bagged5", "bagged1", "bagged10", "bagged12oz"],
    label: "To be Bagged",
    accepts: []
  }
];

class WorkOrderKanban extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statuses,
      workOrders: []
    };
  }

  fetchWorkOrders = () => {
    api.order
      .getOrdersByInventoryType([
        "greenBulk",
        "roastedBulk",
        "bagged10",
        "bagged5",
        "bagged1",
        "bagged12oz"
      ])
      .then(orders => {
        console.log(orders);
        this.setState(state => {
          return {
            ...state,
            workOrders: orders
          };
        });
      });
  };

  componentDidMount() {
    this.fetchWorkOrders();
  }

  handleDrop = (index, item) => {
    let workOrders = [...this.state.workOrders];
    let idx = -1;

    workOrders.find((order, index) => {
      if (item.id === order.id) {
        idx = index;
      }
    });

    if (idx !== -1) {
      workOrders[idx].inventoryType = statuses[index].value[0];
    }

    this.setState(state => {
      return {
        workOrders
      };
    });

    // make api request to update workOrder
    // refetch all workOrders
  };

  render() {
    const { workOrders, statuses } = this.state;

    return statuses.map(({ accepts, value, label }, index) => (
      <WorkOrderStatusColumn
        key={index}
        label={label}
        accepts={accepts}
        onDrop={item => this.handleDrop(index, item)}
        options={workOrders
          .filter(({ inventoryType: status }) => value.indexOf(status) > -1)
          .map(order => (
            <WorkOrder key={index} {...order} type={"WORKORDER"} />
          ))}
      />
    ));
  }
}

export default DragDropContext(HTML5Backend)(WorkOrderKanban);
