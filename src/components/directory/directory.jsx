import React from "react";
import { sections } from "./directory.data";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";

class DirectoryMenu extends React.Component {
  constructor() {
    super();
    this.state = { sections };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
