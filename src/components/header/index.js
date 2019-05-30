import React from "react";
import "./style.css";
import Logo from "../../images/logo.png";

const Header = () => (
  <div className="header text-center">

    <img src={Logo} alt="head" className="logo animated fadeInUp delay-1s" />
  </div>
);

export default Header;
