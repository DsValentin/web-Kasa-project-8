import React from "react";
import "./collapse.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`collapse ${isOpen ? "open" : "close"}`}>
      <div className="collapse-header" onClick={onClick}>
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`arrow ${isOpen ? "open" : "close"}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "open" : "close"}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
