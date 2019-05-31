import React from "react";
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
            <i
              onClick={this.props.handleCartOpen}
              className="fas fa-shopping-cart fa-2x shopping-cart"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
