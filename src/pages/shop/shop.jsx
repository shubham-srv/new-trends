import React from "react";
import { Route, Switch } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection-page/collection-page";

import "./shop.scss";

const ShopPage = ({ match }) => (
  <div className="shop">
    <h1>Collections</h1>
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  </div>
);

export default ShopPage;
