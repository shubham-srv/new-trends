import React, { useState } from "react";

import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";

// import { ContactPageContainer, HeadingContainer } from "./contact.styles";
import "./contact.scss";

const ContactUs = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="bg">
      <div className="background-img" alt="Customer_Care_Logo" />
      {/* <h1>Contact us</h1> */}
      <div className="form-element">
        <form action="submit">
          <FormInput
            changeHandler={handleChange}
            name="name"
            value={data.name}
            label="Name"
            required
          />
          <FormInput
            changeHandler={handleChange}
            name="email"
            value={data.email}
            label="Email"
            required
          />
          <CustomButton>SUBMIT</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
