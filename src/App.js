import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./features/Dashboard";
import Homepage from "./features/Homepage";
import Product from "./features/Product";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/products" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
