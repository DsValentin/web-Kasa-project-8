import React from "react";
import "./card.styles.scss";
import { Link } from "react-router-dom";
import CardItem from "../cardItem/cardItem.component";

const Card = ({ logementsData, onCardClick }) => (
  <div className="gallery">
    <div className="gallery-grid">
      {logementsData.map((logement) => (
        <Link key={logement.id} to={`/logement/${logement.id}`}>
          <div
            className="card-container"
            onClick={() => onCardClick(logement.id)}
          >
            <CardItem logement={logement} />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Card;
