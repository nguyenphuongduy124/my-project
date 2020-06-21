import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../../../../constants/global";
import "./ProductForm.scss";
ProductForm.propTypes = {};

const randomImageUrl = () => {
  let randomId = Math.floor(Math.random() * 200) + 1;
  return `https://picsum.photos/id/${randomId}/300/300.jpg`;
};

const Category = (props) => {
  const { category, onHandleChangeCheck, categories } = props;
  let isChecked =
    categories.findIndex((x) => x === category.name) >= 0 ? true : false;
  return (
    <label className="checkbox-inline mr-4">
      <input
        className="mr-2"
        type="checkbox"
        value={category.name}
        name={category.name}
        checked={isChecked}
        onChange={onHandleChangeCheck}
      />
      {category.label}
    </label>
  );
};

function ProductForm(props) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    categories: [],
  });
  const { isEdit, onHandleSubmitForm, productEdit } = props;
  useEffect(() => {
    if (productEdit) {
      setProduct(productEdit);
    }
  }, [productEdit]);
  function handleSubmit(event) {
    event.preventDefault();
    onHandleSubmitForm(product);
  }

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    setProduct({
      ...product,
      [name]: value,
    });
  }

  function randomImage() {
    let url = randomImageUrl();
    setProduct({
      ...product,
      image: url,
    });
  }

  function handleChangeCheck(event) {
    let name = event.target.name;
    let checked = event.target.checked;
    let newCategories = [...product.categories];
    if (checked) {
      if (newCategories.findIndex((x) => x === name) < 0) {
        newCategories.push(name);
      }
    } else {
      if (newCategories.findIndex((x) => x === name) >= 0) {
        let index = newCategories.findIndex((x) => x === name);
        newCategories.splice(index, 1);
      }
    }
    console.log(newCategories);
    setProduct({
      ...product,
      categories: newCategories,
    });
  }

  return (
    <div className="row product-form">
      <div className="col-md-9 pr-3">
        <p className="h3 mt-3">{isEdit ? "Edit product" : "Add new product"}</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Product name"
              value={product.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="h6" htmlFor="description">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="5"
              name="description"
              value={product.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label className="h6">Product Categories</label>
            <div>
              {CATEGORIES.map((category) => (
                <Category
                  key={category.id}
                  category={category}
                  onHandleChangeCheck={handleChangeCheck}
                  categories={product.categories}
                />
              ))}
            </div>
          </div>
          <div className="form-group w-25">
            <div>
              <label className="h6">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group random-image">
            <label className="h6">Product Image</label>
            <div className="random-button">
              <input
                type="button"
                className="btn btn-sm btn-success"
                value="Random"
                onClick={randomImage}
              />
            </div>
            <div className="product-image">
              <img src={product.image} alt="random" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col-md-3 mt-3">Right column</div>
    </div>
  );
}

export default ProductForm;
