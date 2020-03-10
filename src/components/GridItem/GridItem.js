import React from "react";
import PropTypes from "prop-types";
import "./GridItem.css";

const GridItem = ({ heading, content }) => (
  <div className="wrapper">
    <h3>{heading}</h3>
    <p>{content}</p>
  </div>
);

GridItem.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default GridItem;
