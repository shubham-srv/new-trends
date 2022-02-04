import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  function clickHandler() {
    history.push(`${match.url}${linkUrl}`);
  }

  return (
    <div className={`${size} menu-item`} onClick={clickHandler}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      ></div>

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP</span>
        <span className="subtitle">NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
