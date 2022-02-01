import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { setSignUpNewUser } from "../../redux/user/user.actions";

import "./sign-up.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = userDetails;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    } else {
      dispatch(setSignUpNewUser(userDetails));
      setUserDetails({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const { displayName, email, password, confirmPassword } = userDetails;
  return (
    <div className="sign-up">
      <h2 className="title">I don't have an account</h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          changeHandler={handleChange}
          label="name"
          type="name"
          name="displayName"
          value={displayName}
          required
        />
        <FormInput
          changeHandler={handleChange}
          label="email"
          type="email"
          name="email"
          value={email}
          required
        />
        <FormInput
          changeHandler={handleChange}
          label="password"
          type="password"
          name="password"
          value={password}
          required
        />
        <FormInput
          changeHandler={handleChange}
          label="confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <div className="sign-up-button">
          <CustomButton type="submit">SIGN UP</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
