import React, { Component } from "react";
import api from "../api";
import jwt from "jsonwebtoken";

class NewOrder extends Component {
  constructor() {
    super();

    this.state = {
      orderQty: 0,
      type: "",
      item: "",
      inventoryType: {
        bagged12oz: {
          type: "12 oz Bagged",
          minValue: 0.75,
          unitOfMeasure: "oz"
        },
        bagged1: {
          type: "1 lbs Bagged",
          minValue: 1,
          unitOfMeasure: "lbs"
        },
        bagged5: {
          type: "5 lbs Bagged",
          minValue: 5,
          unitOfMeasure: "lbs"
        },
        bagged1: {
          type: "1 lbs Bagged",
          minValue: 10,
          unitOfMeasure: "lbs"
        },
        greenBulk: {
          type: "Green Bulk",
          minValue: 50,
          unitOfMeasure: "lbs"
        },
        roastedBulk: {
          type: "Roasted Bulk",
          minValue: 5,
          unitOfMeasure: "lbs"
        }
      }
    };
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => {
      return {
        ...this.state,
        [changeEvent.target.name]: changeEvent.target.value
      };
    });
  };

  onSubmit = submitEvent => {
    submitEvent.preventDefault();
    let { item, type, inventoryType } = this.state;

    // minOrderQty = inventoryType[type].minValue;

    api.items.create(this.state.item).then(item => {
      this.props.history.push(`/inventory`);
    });
  };

  render() {
    return (
      <div>
        <h1>New Order</h1>
        <form onSubmit={this.onFormSubmit}>
          <select
            required
            name={"item"}
            onChange={this.onInputChange}
            placeholder={"Coffee Origin"}
          >
            <option value={"Nicuraguan"}>Nicuraguan</option>
            <option value={"Venezualan"}>Venezualan</option>
            <option value={"Colombian"}>Colombian</option>
          </select>
          <br />
          <select
            required
            name={"type"}
            onChange={this.onInputChange}
            placeholder={"Bagged"}
          >
            <option value={"bagged12oz"}>12 oz</option>
            <option value={"bagged1"}>1 lb</option>
            <option value={"bagged5"}>5 lbs</option>
            <option value={"bagged10"}>10 lbs</option>
            <option value={"roastedBulk"}>5 lbs Increments</option>
            <option value={"greenBulk"}>10 lbs Increments</option>
          </select>
          <br />
          <input
            type={"number"}
            name={"orderQty"}
            placeholder={"Order Quantity"}
            value={this.state.orderQty}
            onChange={this.onInputChange}
          />
          <input type="submit" value={"Order"} />
        </form>
      </div>
    );
  }
}

export default NewOrder;
