// HomePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/banner/banner.component";
import Card from "../../components/card/card.component";
import logementsData from "../../logements.json";
import bannerImageHome from "../../assets/banner_home_background.png";
import "./homepage.styles.scss";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/logement/${id}`);
  };

  return (
    <div className="homepage">
      <Banner text="Chez vous, partout et ailleurs" image={bannerImageHome} />
      <Card logementsData={logementsData} onCardClick={handleCardClick} />
    </div>
  );
};

export default HomePage;
