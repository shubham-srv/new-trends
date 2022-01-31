import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { selectCollectionsIsLoading } from "../../redux/shop/shop.selectors";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../collection-page/collection-page";
import WithSpinner from "../../components/with-spinner/with-spinner";

import "./shop.scss";

const WithSpinnerCollectionOverview = WithSpinner(CollectionOverview);
const WithSpinnerCollectionPage = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match, isCollectionsLoading } = this.props;
    return (
      <div className="shop">
        <div>
          <Switch>
            <Route
              exact
              path={`${match.path}`}
              render={(props) => (
                <WithSpinnerCollectionOverview
                  isLoading={!isCollectionsLoading}
                  {...props}
                />
              )}
            />
            <Route
              path={`${match.path}/:collectionId`}
              render={(props) => (
                <WithSpinnerCollectionPage
                  isLoading={!isCollectionsLoading}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoading: selectCollectionsIsLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
