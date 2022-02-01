import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, useRouteMatch } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import CustomButton from "../../components/custom-button/custom-button";
import CheckoutForm from "../../components/checkout-form/checkout-form";
import PaymentSuccess from "./payment-success";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.scss";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51KKIJSSHaHrC4tUowrwdkpnwvyYuTYUjnU3es1P4wsr04lqsNkxyhBOluSAWEsaVSKz4C4w8SI5UzPjbx9Z9Dvo4008fU4abOo"
);

const CheckoutPage = ({ cartItems, cartTotal }) => {
  const match = useRouteMatch();
  console.log(`${match.path}/success`);
  const priceForStripe = cartTotal * 100;
  const [clientSecret, setClientSecret] = useState("");

  const handlePaymentClick = () => {
    axios({
      url: "/payment",
      method: "post",
      data: { amount: priceForStripe },
    })
      .then((response) => response.data)
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  };

  const appearance = {
    theme: "night",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
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
      <div>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
      <div className="total">TOTAL: {cartTotal}$</div>
      {!clientSecret && (
        <CustomButton onClick={handlePaymentClick}>PAY NOW</CustomButton>
      )}
      <Route path={`${match.path}/success`} component={PaymentSuccess} />
      <div className="card-details">
        <h2>
          USE THE FOLLOWING CARD DETAILS FOR PAYMENT <br />
          4242 4242 4242 4242, EXP:any future date, CVV:123
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
