import React from "react";
import "./ProductStyleBB.scss";
import { formatPrice } from "../../../../services/function";

ProductStyleBB.propTypes = {};

function ProductStyleBB(props) {
  return (
    <div className="product-style-bb">
      <div className="product-style-bb__image">
        <img src="/assets/images/vga.jpg" alt="product" />
      </div>
      <div className="product-style-bb__name">
        <a href="#.">
          Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit
          Router
        </a>
      </div>
      <div className="product-style-bb__price">
        <div className="wrapper">
          <p className="price-current">{formatPrice(3000000)}</p>
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
  );
}

export default ProductStyleBB;
