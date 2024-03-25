import React from "react";
import "./cardItem.styles.scss";

const CardItem = ({ logement }) => (
  <div className="gallery-item">
    <img src={logement.cover} alt={logement.title} />
    <h2>{logement.title}</h2>
  </div>
);

export default CardItem;
