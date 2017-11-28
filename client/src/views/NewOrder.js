import React, { Component } from "react";
import api from "../api";
import jwt from "jsonwebtoken";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";

class NewOrder extends Component {
  constructor() {
    super();

    this.state = {
      orderQty: 0,
      type: "bagged12oz",
      items: [],
      item: "",
      minQty: 0,
      date: "",
      inventoryType: {
        bagged12oz: {
          type: "12 oz Bagged",
          minValue: 0.75,
          unitOfMeasure: "lbs"
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
        bagged10: {
          type: "10 lbs Bagged",
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

  componentDidMount() {
    // let { token } = jwt.decode(localStorage.getItem(token));
    api.inventory.getAll().then(items => {
      console.log(items);
      this.setState(state => {
        return {
          ...state,
          items
        };
      });
    });
  }

  onInputChange = changeEvent => {
    changeEvent.persist();

    this.setState(
      state => {
        return {
          ...this.state,
          [changeEvent.target.name]: changeEvent.target.value
        };
      },
      () => {
        this.checkOrderMinimum();
      }
    );
  };

  onFormSubmit = submitEvent => {
    submitEvent.preventDefault();
    let { item, type, inventoryType, orderQty, date } = this.state;
    api.inventory.update(item.id, { inventoryType: type, qty: orderQty, dueDate: date }).then(data => {
      console.log(data)
    })
  };

  checkOrderMinimum = () => {
    let { type, inventoryType, orderQty } = this.state;
    let minVal = inventoryType[type].minValue;
    this.setState(state => {
      return {
        ...state,
        minQty: minVal * Math.ceil(orderQty / minVal)
      };
    });
  };

  render() {
    let { type, inventoryType, items, minQty } = this.state;
    return (
      <div>
        <PageHeader>New Order</PageHeader>
        <form onSubmit={this.onFormSubmit}>
          <FormRow>
            <label>Coffee Origin: </label>
            <select required name={"item"} onChange={this.onInputChange}>
              {items.map(i => <option key={i.id}>{i.item.name}</option>)}
            </select>
          </FormRow>

          <FormRow>
            <label>Bagged: </label>
            <select required name={"type"} onChange={this.onInputChange}>
              <option value={"bagged12oz"}>12 oz</option>
              <option value={"bagged1"}>1 lb</option>
              <option value={"bagged5"}>5 lbs</option>
              <option value={"bagged10"}>10 lbs</option>
              <option value={"roastedBulk"}>Roasted Bulk</option>
              <option value={"greenBulk"}>Green Bulk</option>
            </select>
          </FormRow>

          <FormRow>
            <label>Order Quantity: </label>
            <input
              type={"number"}
              name={"orderQty"}
              value={this.state.orderQty}
              onChange={this.onInputChange}
            />
            <span>
              {"  "}
              {minQty} minimum order quantity.
            </span>
          </FormRow>

          <FormRow>
            <label>Date Needed By: </label>
            <input type="date" />
          </FormRow>

          <FormRow>
            <input type="submit" value={"Order"} />
          </FormRow>
        </form>
      </div>
    );
  }
}

const FormRow = styled.div`
  padding: 2px;
  margin: 2px;
`;

export default NewOrder;
