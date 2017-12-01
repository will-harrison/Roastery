import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import AuthenticatedRoute from "./containers/AuthenticatedRoute";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Inventory from "./views/Inventory";
import AddItem from "./views/AddItem";
import BaggingOrder from "./views/BaggingOrder";
import PlacedOrders from "./views/PlacedOrders";
import NewOrder from "./views/NewOrder";
import RoastOrder from "./views/RoastOrder";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <BackgroundColor>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/signup"} component={Signup} />
            <Route exact path={"/login"} component={Login} />
            <AuthenticatedRoute
              exact
              path={"/inventory"}
              component={Inventory}
            />
            <AuthenticatedRoute
              exact
              path={"/new-order"}
              component={NewOrder}
            />
            <AuthenticatedRoute exact path={"/add-Item"} component={AddItem} />
            <AuthenticatedRoute
              exact
              path={"/placed-orders"}
              component={PlacedOrders}
            />
            <AuthenticatedRoute
              exact
              path={"/roast-order"}
              component={RoastOrder}
            />
            <AuthenticatedRoute
              exact
              path={"/bagging-order"}
              component={BaggingOrder}
            />
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
