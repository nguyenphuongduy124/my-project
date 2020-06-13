import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import AdminLayout from "../../../../common/AdminLayout";
import { axiosPost, axiosUpdate } from "../../../../services/axios";
import ProductForm from "../../components/ProductForm";
import { addProduct, updateProduct } from "../../productSlice";
import "./AddEditPage.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const productId = match.params.id;
  const productEdit = useSelector((state) =>
    state.products.find((x) => x.id === productId)
  );
  const isEdit = productId ? true : false;

  function handleSubmitForm(values) {
    if (!values.hasOwnProperty("id")) {
      axiosPost("products", values)
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            const action = addProduct(values);
            dispatch(action);
            console.log("Them san pham thanh cong!");
          }
        })
        .catch((err) => console.log("Add product error: ", err));
    } else {
      axiosUpdate(`products/${values.id}`, values)
        .then((res) => {
          const { status } = res;
          console.log(res);
          if (status === 200) {
            const action = updateProduct(values);
            dispatch(action);
            console.log("Update san pham thanh cong!");
          }
        })
        .catch((err) => console.log("Update product error: ", err));
    }
  }

  return (
    <AdminLayout>
      <ProductForm
        onHandleSubmitForm={handleSubmitForm}
        isEdit={isEdit}
        productEdit={productEdit}
      />
    </AdminLayout>
  );
}

export default AddEditPage;
