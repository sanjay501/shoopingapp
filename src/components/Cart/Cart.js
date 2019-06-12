import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your " title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <EmptyCart />
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
