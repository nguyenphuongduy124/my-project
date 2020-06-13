import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../../../common/AdminLayout";

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <AdminLayout>
      <div>Main page show products</div>
      <div>
        <Link to="/products/add">Add new product</Link>
      </div>
    </AdminLayout>
  );
}

export default MainPage;
