import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import "./sign-in.scss";

import {
  setGoogleSignInStart,
  setEmailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(setEmailSignInStart(userDetails));
    setUserDetails({ email: "", password: "" });
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with Email and Password.</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={userDetails.email}
          changeHandler={changeHandler}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={userDetails.password}
          changeHandler={changeHandler}
          required
        />
        <div className="button">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(setGoogleSignInStart())}
            isGoogleSignIn={true}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
