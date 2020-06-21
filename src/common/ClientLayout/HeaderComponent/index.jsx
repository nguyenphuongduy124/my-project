import React from "react";
import "./HeaderComponent.scss";

HeaderComponent.propTypes = {};

function HeaderComponent(props) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="menu-box">
          <i className="zmdi zmdi-menu"></i>
        </div>
        <div className="header-logo">
          <a href="#.">
            <img src="/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div className="header-search">
          <div className="search-bar">
            <form action="#">
              <input type="text" placeholder="Search type input" />
            </form>
            <div className="keywords">
              <a href="#.">keyboard</a>
              <a href="#.">mouse</a>
            </div>
            <div className="icon-search">
              <i className="zmdi zmdi-search"></i>
            </div>
          </div>
          <div className="portals">
            <a href="#." className="orange">
              Today’s Best Deals
            </a>
            <a href="#." className="orange">
              Email Deals
            </a>
            <a href="#." className="light-blue">
              Back to the Office
            </a>
            <a href="#." className="light-blue">
              Work-From-Home Kits
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="header-right__top">
            <div className="sign-in">
              <a href="#.">
                <i className="zmdi zmdi-account-circle"></i>
                <div>
                  <p>Welcome</p>
                  <p>Sign in / Register</p>
                </div>
              </a>
            </div>
            <div className="cart">
              <a href="#.">
                <i className="zmdi zmdi-shopping-cart"></i>
              </a>
            </div>
            <div className="dark-mode">
              <input type="checkbox" />
            </div>
          </div>
          <div className="header-right__bottom">
            <a href="#.">
              <span>Newegg</span> Business
            </a>
            <a href="#.">
              <span>
                <i className="zmdi zmdi-comments"></i>
              </span>
              Feedback
            </a>
            <a href="#.">
              <span>
                <i className="zmdi zmdi-pin-help"></i>
              </span>
              Customer Service
              <span>
                <i className="zmdi zmdi-caret-down"></i>
              </span>
            </a>
            <a href="#.">
              <img src="/assets/images/vietnam.png" alt="Vietnam-flag" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
