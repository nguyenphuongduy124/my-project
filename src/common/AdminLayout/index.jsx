import React from "react";
import "./AdminLayout.scss";
import Sidebar from "./Sidebar";
import PageContent from "./PageContent";
import "../../assets/styles/bootstrap.min.css";

function AdminLayout(props) {
  return (
    <div className="container-fluid admin-page">
      <div className="row">
        <div className="col-md-2 sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 page-content">
          <PageContent>{props.children}</PageContent>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
