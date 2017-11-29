import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Inventory from "./views/Inventory";
import AddItem from "./views/AddItem";
import BaggingOrder from "./views/BaggingOrder";
import PlacedOrders from "./views/PlacedOrders";
import NewOrder from "./views/NewOrder";
import RoastOrder from "./views/RoastOrder";
import Navbar from "./containers/Navbar";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <BackgroundColor>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/signup"} component={Signup} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/inventory"} component={Inventory} />
            <Route exact path={"/add-Item"} component={AddItem} />
            <Route exact path={"/bagging-order"} component={BaggingOrder} />
            <Route exact path={"/placed-orders"} component={PlacedOrders} />
            <Route exact path={"/new-order"} component={NewOrder} />
            <Route exact path={"/roast-order"} component={RoastOrder} />
          </Switch>
        </BackgroundColor>
      </BrowserRouter>
    );
  }
}

const BackgroundColor = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #fdf9f1;
`;

export default Router;
