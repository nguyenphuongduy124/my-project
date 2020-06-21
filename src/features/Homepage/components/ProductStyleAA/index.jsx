import React from "react";
import "./ProductStyleAA.scss";
import { formatPrice } from "../../../../services/function";
ProductStyleAA.propTypes = {};

const product = {
  id: "1",
  name:
    "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
  description: "Product of tp link",
  image:
    "https://c1.neweggimages.com/NeweggImage/ProductImage/83-101-738-V01.jpg",
  price: 3000000,
  "price-origin": 3500000,
  category: ["switch"],
  brand: "tp-link",
  shipping: 0,
};

function ProductStyleAA(props) {
  return (
    <div className="product-style-aa">
      <div className="product-style-aa__inner">
        <div className="product-style-aa__inner-left">
          <img
            src="https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/19-113-569-V10.jpg"
            alt="product"
          />
        </div>
        <div className="product-style-aa__inner-right">
          <div className="product__brand">
            <img
              src="https://c1.neweggimages.com/Brandimage_70x28//Brand1455.gif"
              alt="brand"
            />
            <span>
              <i className="zmdi zmdi-star"></i>
              <i className="zmdi zmdi-star"></i>
              <i className="zmdi zmdi-star"></i>
              <i className="zmdi zmdi-star"></i>
            </span>
          </div>
          <div className="product__name">
            <a href="#.">{product.name}</a>
          </div>
          <div className="product__price">
            <div className="wrapper">
              <p className="price-origin">
                {formatPrice(product["price-origin"])}
              </p>
              <p className="price-current">{formatPrice(product.price)}</p>
              <p className="price-save">
                <label>Save: 28%</label>
              </p>
              <p className="shipping">Free shipping</p>
              <p className="add-to-cart">
                <button>
                  Add to card <i className="zmdi zmdi-caret-right"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductStyleAA;
