import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.scss";

const StripeButton = ({ price }) => {
  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const priceForStripe = price * 100;

  const handleToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="New-Trends Pvt. Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is: ${price}$`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={handleToken}
      stripeKey={stripeKey}
    />
  );
};

export default StripeButton;
