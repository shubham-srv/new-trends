import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import CheckoutPage from "./pages/checkout/checkout";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/firebase/firebase.utils";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

const App = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid } = user;
        dispatch(checkUserSession({ displayName, email, uid }));
      }
    });
    return {
      unSubscribeFromAuth,
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/sign-in"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInSignUp />)}
        />
      </Switch>
    </div>
  );
};

export default App;
