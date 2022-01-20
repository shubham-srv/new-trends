import React from "react";
import "./cart-item.scss";

const CartItem = ({ imageUrl, name, price, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          ${price}x{quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
