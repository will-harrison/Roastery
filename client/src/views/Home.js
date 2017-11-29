import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";
import WorkOrderKanban from "../components/WorkOrderKanban";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 150
          }}
        >
          <WorkOrderKanban />
        </div>
        <div
          style={{
            textAlign: "center",
            width: 300,
            margin: "80px auto"
          }}
        >
          <Button
            fluid
            basic
            color="grey"
            onClick={() => this.props.history.push("/new-order")}
          >
            New Order
          </Button>
          <br />
          <Button
            fluid
            basic
            color="grey"
            onClick={() => this.props.history.push("/add-item")}
          >
            Add Item
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
