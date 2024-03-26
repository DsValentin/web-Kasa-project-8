import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../../components/carrousel/carrousel.jsx";
import Collaps from "../../components/collapse/Collapse.jsx";
import Stars from "../../components/rating/star_rating.jsx";
import logements from "../../logements.json";
import "./logementpage.style.scss";

const LogementPage = () => {
  const [house, setHouse] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const selectedHouse = logements.find((log) => log.id === params.id);
    if (selectedHouse) {
      setHouse(selectedHouse);
      const [firstName, lastName] = selectedHouse.host.name.split(" ");
      setFirstName(firstName);
      setLastName(lastName);
    } else {
      navigate("/404");
    }
  }, [navigate, params.id]);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  return (
    <section className="LogementPage">
      {house.id && (
        <>
          <div className="Carousel">
            <Carousel slides={house.pictures} />
          </div>

          <div className="Infos">
            <div className="Details">
              <h1>{house.title}</h1>
              <p>{house.location}</p>
              <ul>
                {house.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="User">
              <div className="Profile">
                <div>
                  <div>{firstName}</div>
                  <div>{lastName}</div>
                </div>
                <div className="host-picture">
                  <img src={house.host.picture} alt="Profil user" />
                </div>
              </div>
              <div className="Rating">
                <Stars note={house.rating} className="my-stars" />
              </div>
            </div>
          </div>

          <div className="MoreInfos">
            <Collaps
              title="Description"
              content={house.description}
              isOpen={isDescriptionOpen}
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            />
            <Collaps
              title="Equipements"
              content={house.equipments.map((equipement, i) => (
                <li key={i}>{equipement}</li>
              ))}
              isOpen={isEquipmentsOpen}
              onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default LogementPage;
