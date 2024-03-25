import React from "react";
import "./footer.styles.scss";
import logo from "../../assets/LOGO_footer.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <span className="imgFooter">
        <img src={logo} alt="Logo Kasa" />
      </span>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
