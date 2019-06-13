import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/shopify/Cart";
import store from "../store";

// Custom Components
import Nav from "../components/Nav";
import GenericProductsPage from "../components/ProductPage";

// Website Dumb Components
import Header from "../components/header";
import FooterPage from "../components/footer";

class StorePage extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }
  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) }
    ];
    state.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then(res => {
        store.dispatch({
          type: "UPDATE_QUANTITY_IN_CART",
          payload: { checkout: res }
        });
      });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id;
    state.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then(res => {
        store.dispatch({
          type: "REMOVE_LINE_ITEM_IN_CART",
          payload: { checkout: res }
        });
      });
  }
  handleCartClose() {
    store.dispatch({ type: "CLOSE_CART" });
  }
  handleCartOpen() {
    store.dispatch({ type: "OPEN_CART" });
  }
  addVariantToCart(variantId, quantity) {
    const state = store.getState(); // state from redux store
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = state.checkout.id;
    state.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      store.dispatch({
        type: "ADD_VARIANT_TO_CART",
        payload: { isCartOpen: true, checkout: res }
      });
    });
  }
  render() {
    const state = store.getState(); // state from redux store
    console.log(state);
    return (
      <div className="App">
        <Header />
        <Nav handleCartOpen={this.handleCartOpen} />
        <Cart
          checkout={state.checkout}
          isCartOpen={state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
        <GenericProductsPage />
        <FooterPage />
      </div>
    );
  }
}

export default connect(state => state)(StorePage);
