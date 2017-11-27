import React, { Component } from "react";

import { DragDropContext } from "react-dnd";
import HTML5Backend, { NativeTypes } from "react-dnd-html5-backend";

import WorkOrderStatusColumn from "./WorkOrderStatusColumn";
import WorkOrder from "./WorkOrder";

const statuses = [
  {
    value: "GREENBULK",
    label: "Green Bulk",
    accepts: ["WORKORDER"]
  },
  {
    value: "ROASTED",
    label: "Roasted",
    accepts: ["WORKORDER"]
  },
  {
    value: "BAGGED",
    label: "Bagged",
    accepts: ["WORKORDER"]
  },
  {
    value: "COMPLETE",
    label: "Complete",
    accepts: ["WORKORDER"]
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
    // fetch all work orders
    // set state with all workOrders

    this.setState(state => {
      return {
        workOrders: [
          {
            name: "Arabic",
            pounds: 10,
            status: "GREENBULK",
            type: "WORKORDER"
          },
          {
            name: "Venezualen",
            pounds: 40,
            status: "ROASTED",
            type: "WORKORDER"
          },
          {
            name: "Canadian",
            pounds: 1,
            status: "ROASTED",
            type: "WORKORDER"
          }
        ]
      };
    });
  };

  componentDidMount() {
    this.fetchWorkOrders();
  }

  handleDrop = (index, item) => {
    let workOrders = [...this.state.workOrders];
    let idx = -1;

    workOrders.find((order, index) => {
      if (item.name === order.name) {
        idx = index;
      }
    });

    if (idx !== -1) {
      workOrders[idx].status = statuses[index].value;
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

    return (
      <div>
        {statuses.map(({ accepts, value, label }, index) => (
          <WorkOrderStatusColumn
            key={index}
            label={label}
            accepts={accepts}
            onDrop={item => this.handleDrop(index, item)}
            options={workOrders
              .filter(({ status }) => status !== "COMPLETE")
              .filter(({ status }) => status === value)
              .map(order => <WorkOrder key={index} {...order} />)}
          />
        ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(WorkOrderKanban);
