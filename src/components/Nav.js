import React from "react";
import "./styles/nav.css"

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <ul>
          
          <li className="contact">
            <button onClick={this.props.handleCartOpen}>
              Shopify Cart (I work! CLICK ME!)
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
