import React from "react";
import "./ClientLayout.scss";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

ClientLayout.propTypes = {};

function ClientLayout(props) {
  return (
    <React.Fragment>
      <HeaderComponent />
      {props.children}
      <FooterComponent />
    </React.Fragment>
  );
}

export default ClientLayout;
