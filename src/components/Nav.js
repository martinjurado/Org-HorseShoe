import React from "react";
import { Button } from "react-bootstrap";
import "./styles/nav.css"

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li className="contact">
          <i className="fas fa-shopping-cart fa-2x shopping-cart" onClick={this.props.handleCartOpen}/>            
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
