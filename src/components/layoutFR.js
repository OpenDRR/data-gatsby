import React from "react";
import PropTypes from "prop-types";
import HeaderFR from "./headerFR";
import FooterFR from "./footerFR";
import "../styles/index.scss";

const LayoutFR = ({ children }) => {
  return (
    <>
      <HeaderFR />
      <div className="mt-1">
      <main>{children}</main>
      </div>
      <FooterFR />
    </>
  );
};

LayoutFR.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutFR;
