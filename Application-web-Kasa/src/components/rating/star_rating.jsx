import React from "react";
import "./star_rating.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ note }) => {
  const renderStars = () => {
    const roundedNote = Math.round(note);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < roundedNote) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="fa-solid fa-star orange-star star"
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className="fa-solid fa-star grey-star star"
          />
        );
      }
    }

    return stars;
  };

  return <div className="Stars">{renderStars()}</div>;
};

export default Stars;
