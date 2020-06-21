import React, { useEffect, useRef, useState } from "react";
import "./ProductSlider.scss";
import TitleSection from "../../../../common/TitleSection";
import Proptypes from "prop-types";

ProductSlider.propTypes = {
  title: Proptypes.string,
  more: Proptypes.string,
  textTransform: Proptypes.string,
  link: Proptypes.string,
  hasPrice: Proptypes.bool,
  hasTitle: Proptypes.bool,
  hasAddToCart: Proptypes.bool,
  hasShipping: Proptypes.bool,
  hadBrand: Proptypes.bool,
};

ProductSlider.defaultProps = {
  title: "",
  more: "",
  textTransform: "uppercase",
  link: "#.",
  hasPrice: true,
  hasTitle: true,
  hasAddToCart: true,
  hasShipping: true,
  hasBrand: true,
};

function formatPrice(value) {
  return value.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}
const products = [
  {
    id: "1",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router Router Router Router",
    description: "Product of tp link",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/83-101-738-V01.jpg",
    price: 3000000,
    category: ["switch"],
    brand: "tp-link",
    shipping: 0,
  },
  {
    id: "2",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Product of kingston",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/2BA-0041-00029-V01.jpg",
    price: 500000,
    category: ["ram"],
    brand: "kingston",
    shipping: 0,
  },
  {
    id: "3",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Drone Zone",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/AMNJS200611JscRi.jpg",
    price: 3500000,
    category: ["drone"],
    brand: "drone-zone",
    shipping: 0,
  },
  {
    id: "4",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Product of Coinsair",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/20-236-408-V01.jpg",
    price: 1500000,
    category: ["ram"],
    brand: "coinsair",
    shipping: 0,
  },
  {
    id: "5",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Product of Patriot",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/20-225-143-V08.jpg",
    price: 500000,
    category: ["ram"],
    brand: "patriot",
    shipping: 0,
  },
  {
    id: "6",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Product of tp link",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/83-101-738-V01.jpg",
    price: 3000000,
    category: ["switch"],
    brand: "tp-link",
    shipping: 0,
  },
  {
    id: "7",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Product of kingston",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/2BA-0041-00029-V01.jpg",
    price: 500000,
    category: ["ram"],
    brand: "kingston",
    shipping: 0,
  },
  {
    id: "8",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Drone Zone",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/AMNJS200611JscRi.jpg",
    price: 3500000,
    category: ["drone"],
    brand: "drone-zone",
    shipping: 0,
  },
  {
    id: "9",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Product of Coinsair",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/20-236-408-V01.jpg",
    price: 1500000,
    category: ["ram"],
    brand: "coinsair",
    shipping: 0,
  },
  {
    id: "10",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Product of Patriot",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/20-225-143-V08.jpg",
    price: 500000,
    category: ["ram"],
    brand: "patriot",
    shipping: 0,
  },
  {
    id: "11",
    name:
      "Refurbished: TP-Link Archer C3150 REC AC2300 Wireless MU-MIMO Gigabit Router",
    description: "Product of Coinsair",
    image:
      "https://c1.neweggimages.com/NeweggImage/ProductImage/20-236-408-V01.jpg",
    price: 1500000,
    category: ["ram"],
    brand: "coinsair",
    shipping: 0,
  },
];

function ProductSlider(props) {
  const [counter, setCounter] = useState(0);
  const [amountSlide, setAmountSlide] = useState(1);
  const width = useRef(100);
  const [marginLeft, setMarginLeft] = useState(0);

  const {
    amount,
    title,
    more,
    textTransform,
    link,
    hasTitle,
    hasPrice,
    hasAddToCart,
    hasShipping,
    hasBrand,
  } = props;

  useEffect(() => {
    let newMarginLeft = 0;
    newMarginLeft = counter * width.current;
    setMarginLeft(newMarginLeft);
  }, [counter]);

  function handlePrev() {
    let newCounter = counter - 1;
    if (newCounter < 0) {
      setCounter(Math.floor(products.length / +amount));
      return;
    }
    setCounter(newCounter);
  }

  function handleNext() {
    if (counter > products.length / amount - 1) {
      setCounter(0);
      return;
    }

    let newCounter = counter + 1;
    setCounter(newCounter);
  }

  return (
    <div className="product-slider">
      <TitleSection
        title={title}
        more={more}
        textTransform={textTransform}
        link={link}
      />
      <div className="product-slider-inner">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className="product-slider-item product-slider-item-1 product"
            style={{
              marginLeft: idx === 0 ? -marginLeft + "%" : "unset",
              width: 100 / amount + "%",
            }}
          >
            <div className="product__image">
              <img src={product.image} alt="product" />
            </div>
            {hasBrand && (
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
            )}
            <div className="product__name">
              <a href="#.">{hasTitle && product.name}</a>
            </div>
            <div className="product__price">
              <div className="wrapper">
                <p className="price-current">
                  {hasPrice && formatPrice(product.price)}
                </p>
                <p className="shipping">{hasShipping && "Free shipping"}</p>
                {hasAddToCart && (
                  <p className="add-to-cart">
                    <button>
                      Add to card <i className="zmdi zmdi-caret-right"></i>
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="control control-left" onClick={handlePrev}>
          <i className="zmdi zmdi-chevron-left"></i>
        </button>
        <button className="control control-right" onClick={handleNext}>
          <i className="zmdi zmdi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductSlider;
