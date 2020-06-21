import React from "react";
import PropTypes from "prop-types";
import "./Sumary.scss";

Sumary.propTypes = {};

function Sumary(props) {
  return (
    <div className="sumary">
      <div className="sumary__title">
        <h2>SHOP WITH CONFIDENCE</h2>
      </div>
      <div className="sumary__content">
        <p>
          <q>
            It was easy, my grandson sent me the link to the item he wanted. All
            Grandma had to do is register, order, and pay. No complaints.
          </q>
          – a grandma
        </p>

        <div>
          <div className="highlight">
            <div>
              <span>20</span>
              <span>M+</span>
            </div>
            <div>Top Selling Items</div>
          </div>
          <div className="highlight">
            <div>
              <span>2.7</span>
              <span>K+</span>
            </div>
            <div>Popular Brands</div>
          </div>
          <div className="highlight">
            <div>
              <span>4</span>
              <span>M+</span>
            </div>
            <div>Legit Customer Reviews</div>
          </div>
          <div className="highlight">
            <div>
              <span>6</span>
              <span>M+</span>
            </div>
            <div>Packages Processed In 2020</div>
          </div>
        </div>
      </div>
      <div className="sumary__signup">
        <div className="sumary__signup_inner">
          <div className="sumary__signup_inner_title">
            <p>GET PROMO CODES IN YOUR INBOX</p>
            <p>EXCLUSIVE SAVINGS FOR SUBSCRIBERS</p>
          </div>
          <div className="sumary__signup_inner_form">
            <div>
              <span>
                <i class="zmdi zmdi-email"></i>
              </span>
              <input type="text" />
            </div>
            <div>
              <input type="submit" value="Sign up" />
            </div>
          </div>
          <div className="sumary__signup_inner_email-deals">
            <a href="#.">
              Deal News <i class="zmdi zmdi-caret-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sumary;
