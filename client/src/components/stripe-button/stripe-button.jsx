import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import "./stripe-button.scss";

const StripeButton = ({ price }) => {
  const stripeKey =
    "pk_test_51KKIJSSHaHrC4tUowrwdkpnwvyYuTYUjnU3es1P4wsr04lqsNkxyhBOluSAWEsaVSKz4C4w8SI5UzPjbx9Z9Dvo4008fU4abOo";
  const priceForStripe = price * 100;

  const handleToken = (token) => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: { amount: priceForStripe, token },
    })
      .then((response) => {
        alert("payment was successful");
      })
      .catch((error) => {
        // console.log(JSON.parse(error));
        alert("there was an error");
      });
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
