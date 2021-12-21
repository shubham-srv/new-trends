import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";
import "./shop.scss";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { collection: SHOP_DATA };
  }
  render() {
    return (
      <div className="shop">
        <h1>Collections</h1>
        <div>
          {this.state.collection.map(({ id, ...otherProps }) => {
            return <CollectionPreview key={id} {...otherProps} />;
          })}
        </div>
      </div>
    );
  }
}

export default ShopPage;
