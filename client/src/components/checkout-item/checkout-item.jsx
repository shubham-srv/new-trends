import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { addItem, removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="buttons" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="number">{quantity}</span>
        <div className="buttons" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </div>

      <span className="price">{price}$</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
