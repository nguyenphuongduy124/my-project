import { faBars, faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PageContent.scss";

function PageContent(props) {
  return (
    <div className="page-content-wrapper">
      <div className="row p-2 header">
        <div className="d-flex align-items-center mr-auto">
          <FontAwesomeIcon icon={faBars} size="2x" className="mr-3" />
          <form class="form-inline">
            <input type="text" placeholder="Search..." />
          </form>
        </div>

        <div className="d-flex align-items-center">
          <div className="notify mr-3">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>3</span>
          </div>
          <div className="notify mr-3">
            <FontAwesomeIcon icon={faBell} />
            <span>1</span>
          </div>
          <img
            src="/assets/images/avatar.jpg"
            alt="avatar-admin"
            className="rounded-circle mr-1"
            height="32px"
          />
          <div class="btn-group">
            <button
              type="button"
              class="btn dropdown-toggle shadow-none"
              data-toggle="dropdown"
            >
              Nguyen Duy
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button">
                Edit Account
              </button>
              <button class="dropdown-item" type="button">
                Log out
              </button>
              <button class="dropdown-item" type="button">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2 name">
        <p className="h4">Dashboard</p>
      </div>
      {props.children}
    </div>
  );
}

export default PageContent;
