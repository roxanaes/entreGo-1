import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { LandingLayout } from "../features/landing";
import { DriverFormLayout } from "../features/driverform";
import { DriverLayout, OrderLayout, Order2Layout, UserLayout, Order3Layout, Order4Layout, Order5Layout } from "../features/dashboard";
import PrivateRoute from '../components/privateRoute/privateRoute.component';

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard/driver/order-5" component={Order5Layout} />
        <PrivateRoute path="/dashboard/driver/order-4" component={Order4Layout} />
        <PrivateRoute path="/dashboard/driver/order-3" component={Order3Layout} />
        <PrivateRoute path="/dashboard/driver/order-2" component={Order2Layout} />
        <PrivaetRoute path="/dashboard/driver/order-1" component={OrderLayout} />
        <Route path="/dashboard/user" component={UserLayout} />
        <PrivateRoute path="/dashboard/driver" component={DriverLayout} />
        <Route path="/register/driver" component={DriverFormLayout} />
        <Route exact path="/" component={LandingLayout} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  )
}

export {
  Routes
}
