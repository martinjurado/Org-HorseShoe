import React from "react";
import "./style.css";
import Logo from "../../images/logo.png";
import Head from "../../images/header.jpg";

const Header = () => (
  <div className="header text-center">
    <img src={Head} alt="head" className="w-100 header animated fadeIn" />
    <img src={Logo} alt="head" className="logo animated fadeInUp delay-1s" />
    <h1 className="main-header">Buy the Latest Collection</h1>
  </div>
);

export default Header;
