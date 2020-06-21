import React from "react";
import { Route, Switch } from "react-router-dom";
import ClientLayout from "../../common/ClientLayout";
import MainPage from "./pages/MainPage";
Homepage.propTypes = {};

function Homepage(props) {
  return (
    <ClientLayout>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </ClientLayout>
  );
}

export default Homepage;
