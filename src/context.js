import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
//Provider : provides data
//Consumer : access data

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: storeProducts,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempproducts = [];
    storeProducts.forEach(item => {
      const singleitem = { ...item }; //three dots indicate comping value not referencing
      tempproducts.push(singleitem);
    });
    this.setState(() => {
      return { products: tempproducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    console.log(product);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProduct = [...this.state.products];
    let tempcart = [...this.state.cart];
    const index = this.state.products.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    tempcart.push(product);
    this.setState(() => {
      return {
        products: tempProduct,
        cart: tempcart
      };
    });
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false
      };
    });
  };

  increment = id => {
    console.log("hello from increment method");
  };
  decrement = id => {
    console.log("hello from decrement method");
  };
  removeItem = id => {
    console.log("hello from remove method");
  };
  clearCart = () => {
    console.log("hello from clear cart method");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
