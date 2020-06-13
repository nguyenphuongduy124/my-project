import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row bd-navbar">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="navbar-brand">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="navbar-brand">
                Product
              </Link>
            </li>
          </ul>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
