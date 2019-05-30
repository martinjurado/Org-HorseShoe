import React from "react";
import { Button } from "react-bootstrap";
import "./styles/nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
          <i class="fas fa-bars fa-2x menu" />
          </li>
          <li className="contact">
            <button
              onClick={this.props.handleCartOpen}
              className="hvr-grow"
              rel="noopener noreferrer"
            >
              <i className="fas fa-shopping-cart fa-2x shopping-cart" />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
