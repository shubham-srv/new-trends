import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeButton from "../../components/stripe-button/stripe-button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <span className="header-block">Product</span>
      <span className="header-block">Description</span>
      <span className="header-block">Quantity</span>
      <span className="header-block">Price</span>
      <span className="header-block">Remove</span>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: {cartTotal}$</div>
    <StripeButton price={cartTotal} />
    <div className="card-details">
      <h2>
        USE THE FOLLOWING CARD DETAILS FOR PAYMENT <br />
        4242 4242 4242 4242, EXP:any future date, CVV:123
      </h2>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
