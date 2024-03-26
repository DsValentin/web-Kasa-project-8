import React, { useState } from "react";
import Banner from "../../components/banner/banner.component";
import Collapse from "../../components/collapse/Collapse";
import "./aboutpage.styles.scss";
import bannerImageAbout from "../../assets/banner_about_background.png";

const AboutPage = () => {
  const [openCollapses, setOpenCollapses] = useState([]);

  const toggleCollaps = (collaps) => {
    setOpenCollapses((prevOpenCollapses) => {
      const isOpen = prevOpenCollapses.includes(collaps);

      if (isOpen) {
        return prevOpenCollapses.filter(
          (openCollaps) => openCollaps !== collaps
        );
      } else {
        return [...prevOpenCollapses, collaps];
      }
    });
  };

  const isCollapsOpen = (collaps) => {
    return openCollapses.includes(collaps);
  };

  return (
    <div className="about-page">
      <Banner image={bannerImageAbout} />
      <div className="content">
        <Collapse
          title="Fiabilité"
          content={
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont
            </p>
          }
          isOpen={isCollapsOpen("collaps1")}
          onClick={() => toggleCollaps("collaps1")}
        />
        <Collapse
          title="Respect"
          content={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme."
            </p>
          }
          isOpen={isCollapsOpen("collaps2")}
          onClick={() => toggleCollaps("collaps2")}
        />
        <Collapse
          title="Service"
          content={
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          }
          isOpen={isCollapsOpen("collaps3")}
          onClick={() => toggleCollaps("collaps3")}
        />
        <Collapse
          title="Sécurité"
          content={
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          }
          isOpen={isCollapsOpen("collaps4")}
          onClick={() => toggleCollaps("collaps4")}
        />
      </div>
    </div>
  );
};

export default AboutPage;
