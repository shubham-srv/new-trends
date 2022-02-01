import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./directory.scss";
import MenuItem from "../menu-item/menu-item";
import { selectSections } from "../../redux/directory/directory.selector";

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({ sections: selectSections });

export default connect(mapStateToProps)(DirectoryMenu);
