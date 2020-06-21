import React from "react";
import PropTypes from "prop-types";
import "./PageSection.scss";

PageSection.propTypes = {
  className: PropTypes.string,
};

PageSection.defaultProps = {
  className: "",
};

function PageSection(props) {
  const { className } = props;

  return (
    <div className="page-section">
      <div className={className}>{props.children}</div>
    </div>
  );
}

export default PageSection;
