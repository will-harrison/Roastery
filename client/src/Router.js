import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Inventory from "./views/Inventory";
import AddItem from "./views/AddItem";
import BaggingOrder from "./views/BaggingOrder";
import Need from "./views/Need";
import NewOrder from "./views/NewOrder";
import RoastOrder from "./views/RoastOrder";
import Navbar from "./containers/Navbar";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          style={{
            height: "100vh",
            backgroundColor: "#FDF9F1"
          }}
        >
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/signup"} component={Signup} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/inventory"} component={Inventory} />
            <Route exact path={"/add-Item"} component={AddItem} />
            <Route exact path={"/bagging-order"} component={BaggingOrder} />
            <Route exact path={"/need"} component={Need} />
            <Route exact path={"/new-order"} component={NewOrder} />
            <Route exact path={"/roast-order"} component={RoastOrder} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
