import React from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../assets/LOGO.png";

const Header = () => {
  return (
    <header className="header">
      <div className="imgheader">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
        <NavItem to="/home" text="Accueil" />
        <NavItem to="/about" text="A Propos" />{" "}
      </nav>
    </header>
  );
};

const NavItem = ({ to, text }) => (
  <NavLink to={to} activeclassname="active" className="nav__link">
    {text}
  </NavLink>
);

export default Header;
