import React, { Component } from "react";

import WorkOrderKanban from "../components/WorkOrderKanban";

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <WorkOrderKanban />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button>Add Item</button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button>Inventory</button>
        </div>
      </div>
    );
  }
}

export default Home;
