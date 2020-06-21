import React from "react";
import PropTypes from "prop-types";
import "./TitleSection.scss";

TitleSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  more: PropTypes.string,
  size: PropTypes.string,
  link: PropTypes.string,
  textTransform: PropTypes.string,
  fontWeight: PropTypes.string,
};

TitleSection.defaultProps = {
  title: "",
  more: "",
  className: "",
  size: "3.2rem",
  link: "#.",
  textTransform: "initial",
  fontWeight: "300",
};

function TitleSection(props) {
  const {
    title,
    more,
    className,
    size,
    link,
    textTransform,
    fontWeight,
  } = props;

  const style = {
    fontSize: size,
    textTransform: textTransform,
    fontWeight: fontWeight,
  };
  return (
    <div className={`${className} title-section`}>
      <h2 style={style}>
        {title}
        <span>
          <a href={link}>
            {more} {more ? <i className="zmdi zmdi-caret-right"></i> : ""}
          </a>
        </span>
      </h2>
    </div>
  );
}

export default TitleSection;
