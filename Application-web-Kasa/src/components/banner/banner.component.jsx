import React from "react";
import "./banner.styles.scss";

const Banner = ({ text, image }) => (
  <section className="banner" style={{ backgroundImage: `url(${image})` }}>
    <div className="banner-text">{text}</div>
  </section>
);

export default Banner;
