import React, { Component } from "react";

import WorkOrderKanban from "../components/WorkOrderKanban";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <WorkOrderKanban />
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => this.props.history.push("/new-order")}>
            New Order
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => this.props.history.push("/add-item")}>
            Add Item
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => this.props.history.push("/inventory")}>
            Inventory
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
