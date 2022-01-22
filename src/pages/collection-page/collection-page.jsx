import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection-page.scss";

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map(({ ...otherProps }) => (
          <CollectionItem key={otherProps.id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, myProps) => {
  return {
    collection: selectCollection(myProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
