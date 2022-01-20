import React from "react";
import { Route, Switch } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import TestPage from "../testpage/testpage";

import "./shop.scss";

const ShopPage = ({ match }) => (
  <div className="shop">
    <h1>Collections</h1>
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path="/shop/:someID" component={TestPage} />
      </Switch>
    </div>
  </div>
);

export default ShopPage;
