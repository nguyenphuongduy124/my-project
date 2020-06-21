import { faBars, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PageContent.scss";

function PageContent(props) {
  return (
    <div className="page-content-wrapper ">
      <div className="row p-2 admin-header">
        <div className="d-flex align-items-center mr-auto admin-header-left">
          <FontAwesomeIcon icon={faBars} size="2x" className="mr-3" />
          <form className="form-inline">
            <input type="text" placeholder="Search..." />
          </form>
        </div>

        <div className="d-flex align-items-center admin-header-right">
          <div className="notify">
            <FontAwesomeIcon icon={faEnvelope} className="icon-svg" />
            <span>3</span>
          </div>
          <div className="notify">
            <FontAwesomeIcon icon={faBell} />
            <span>1</span>
          </div>
          <img
            src="/assets/images/avatar.jpg"
            alt="avatar-admin"
            className="rounded-circle mr-1"
            height="32px"
          />
          <div className="btn-group">
            <button
              type="button"
              className="btn dropdown-toggle shadow-none username"
              data-toggle="dropdown"
            >
              Nguyen Duy
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button className="dropdown-item" type="button">
                Edit Account
              </button>
              <button className="dropdown-item" type="button">
                Log out
              </button>
              <button className="dropdown-item" type="button">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2 name">
        <p className="h2">Dashboard</p>
      </div>
      {props.children}
    </div>
  );
}

export default PageContent;
