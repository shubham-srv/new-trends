import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ReactComponent as Logo } from "../../assets/shop-icon.svg";
import "./header.scss";

import { setSignOutStart } from "../../redux/user/user.actions";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const hidden = useSelector((state) => state.cart.hidden);

  const clickHandler = () => {
    dispatch(setSignOutStart());
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="option" onClick={clickHandler}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            SIGN IN
          </Link>
        )}

        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <CartIcon />
      </div>
      <AnimatePresence>{hidden ? null : <CartDropdown />}</AnimatePresence>
    </div>
  );
};

export default Header;
