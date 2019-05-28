import React from "react";
import Head from "../../images/header.jpg";
import "./style.css"
import Logo from "../../images/logo.png";

const Header = () => (
  <div className="header text-center">
    <img src={Head} alt="head" className="w-100 header animated fadeIn" />
    <img src={Logo} alt="head" className="logo animated fadeInUp delay-1s" />
  </div>
);

export default Header;
