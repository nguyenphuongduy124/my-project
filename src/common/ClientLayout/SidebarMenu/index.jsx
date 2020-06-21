import React from "react";
import "./SidebarMenu.scss";

SidebarMenu.propTypes = {};

function SidebarMenu(props) {
  return (
    <div className="sidebar-menu">
      <ul>
        <li>
          <a href="#.">Computer Systems</a>
        </li>
        <li>
          <a href="#.">Components</a>
        </li>
        <li>
          <a href="#.">Electronics</a>
        </li>
        <li>
          <a href="#.">Gaming</a>
        </li>
        <li>
          <a href="#.">Networking</a>
        </li>
        <li>
          <a href="#.">Software & Services</a>
        </li>
        <li>
          <a href="#.">Automotive & Industrial</a>
        </li>
        <li>
          <a href="#.">Home & Tools</a>
        </li>
        <li>
          <a href="#.">Health & Sports</a>
        </li>
        <li>
          <a href="#.">Apparel & Accessories</a>
        </li>
        <li>
          <a href="#.">Hobbies & Toys</a>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMenu;
