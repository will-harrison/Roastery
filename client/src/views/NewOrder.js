import React, { Component } from "react";

class NewOrder extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>New Order</h1>
        <form onSubmit={this.onFormSubmit}>
          <select required name={"item"} onChange={this.onFormSubmit}>
            <option value={"Nicuraguan"}>Nicuraguan</option>
            <option value={"Venezualan"}>Venezualan</option>
            <option value={"Colombian"}>Colombian</option>
          </select>
          <input type="submit" value={"Order"} />
        </form>
      </div>
    );
  }
}

export default NewOrder;

<Select required name={"clothingType"} onChange={this.onInputChange}>
  <option value="Dresses">Dresses</option>
  <option value="Tops">Tops</option>
  <option value="Bottoms">Bottoms</option>
  <option value="Coats">Coats</option>
  <option value="Shoes">Shoes</option>
</Select>;
