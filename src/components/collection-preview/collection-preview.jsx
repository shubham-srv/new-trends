import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/collection-item";

import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, history, match }) => {
  const handleClick = () => {
    history.push(`${match.url}/${title.toLowerCase()}`);
  };
  return (
    <div className="collection-preview">
      <h1 className="title" onClick={handleClick}>
        {title}
      </h1>

      <div className="preview">
        {items
          .filter((item, index) => {
            return index < 4;
          })
          .map(({ ...otherProps }) => {
            return <CollectionItem key={otherProps.id} {...otherProps} />;
          })}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
