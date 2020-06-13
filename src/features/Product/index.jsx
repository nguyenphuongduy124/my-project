import React from "react";
import { Route, Switch } from "react-router-dom";
import AddEditPage from "./pages/AddEditPage";
import MainPage from "./pages/MainPage";
import "./Product.scss";

Product.propTypes = {};

function Product(props) {
  return (
    <Switch>
      <Route exact path="/products" component={MainPage} />
      <Route path="/products/add" component={AddEditPage} />
      <Route path="/products/:id" component={AddEditPage} />
    </Switch>
  );
}

export default Product;
