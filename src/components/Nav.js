import React from "react";
import { Button } from "react-bootstrap";
import "./styles/nav.css"

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li className="contact">
            <Button variant="primary" onClick={this.props.handleCartOpen}>
              Cart
            </Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
