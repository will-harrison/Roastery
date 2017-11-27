import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import AddItem from "./views/AddItem";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/signup"} component={Signup} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/addItem"} component={AddItem} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
