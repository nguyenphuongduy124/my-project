import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Sidebar(props) {
  return (
    <div>
      <div className="logo-sidebar">
        <img
          src="https://seeklogo.com/images/D/dell-logo-49B6BF5FC9-seeklogo.com.png"
          alt=""
        />
      </div>
      <ul className="menu-sidebar">
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="fa-mr-1" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FontAwesomeIcon icon={faShoppingCart} className="fa-mr-1" />
            Product
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
