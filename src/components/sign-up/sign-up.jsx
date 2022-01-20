import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./sign-up.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    } else {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
      } catch (error) {
        console.log(error);
      }
    }
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            changeHandler={this.handleChange}
            label="name"
            type="name"
            name="displayName"
            value={this.state.displayName}
            required
          />
          <FormInput
            changeHandler={this.handleChange}
            label="email"
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <FormInput
            changeHandler={this.handleChange}
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <FormInput
            changeHandler={this.handleChange}
            label="confirm password"
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
