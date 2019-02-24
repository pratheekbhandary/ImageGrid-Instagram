import React from "react";

import "./cssTrics.scss";
import svg from  "../../svg/close.svg";
const ImageTile = props => {
  let { image } = props;
  return (
    <span className="imageTile">
        <img className="deleteButton" src={svg} alt="No pic" />
        <img className="userImage" src={`${image.Image}`} alt="No pic" />
    </span>
  );
};

export default ImageTile;
