import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./features/Dashboard";
import Product from "./features/Product";
import Header from "./components/Header";
import AdminLayout from "./common/AdminLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/products" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
