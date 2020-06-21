import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AdminLayout from "../../common/AdminLayout";
import { axiosDelete, axiosGet } from "../../services/axios";
import { initProducts, removeProduct } from "../Product/productSlice";
import "./Dashboard.scss";

Dashboard.propTypes = {};

function Dashboard(props) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    axiosGet("products").then((res) => {
      if (res.status === 200) {
        const action = initProducts(res.data);
        dispatch(action);
        setProducts(res.data);
      }
    });
  }, [dispatch]);

  const renderProducts = (products) => {
    let xhtml = null;
    if (products.length > 0) {
      xhtml = products.map((product) => (
        <tr key={product.id}>
          <th scope="row" className="align-middle">
            {product.id}
          </th>
          <td className="align-middle">
            <img src={product.image} width="50" alt="product" />
          </td>
          <td className="align-middle">{product.name}</td>
          <td className="align-middle">{product.categories.join(", ")}</td>
          <td className="align-middle text-center">
            <button
              type="button"
              className="btn btn-sm btn-primary mr-3"
              onClick={() => {
                handleClickEdit(product);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-md btn-danger"
              onClick={() => handleClickRemove(product)}
            >
              Remove
            </button>
          </td>
        </tr>
      ));
    }
    return xhtml;
  };

  function handleClickEdit(product) {
    console.log(product);
    history.push(`/products/${product.id}`);
  }

  function handleClickRemove(product) {
    let removeId = product.id;
    const action = removeProduct(removeId);
    axiosDelete(`products/${removeId}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(action);
          console.log("Xoa san pham thanh cong");
          let newProducts = products.filter((x) => x.id !== removeId);
          setProducts(newProducts);
        }
      })
      .catch((err) => console.log("Xay ra loi khi xoa: ", err));
  }

  return (
    <AdminLayout>
      <div className="row dashboard">
        <table className="table table-sm table-bordered">
          <thead className="">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Categories</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{renderProducts(products)}</tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;
