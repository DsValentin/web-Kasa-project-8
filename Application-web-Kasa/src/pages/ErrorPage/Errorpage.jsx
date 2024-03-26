import React from "react";
import { Link } from "react-router-dom";
import "./errorpage.styles.scss";

const Error404 = () => {
  return (
    <main className="Error404">
      <h1>404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to={"/home"} className="ErrotoHome">
        <p className="return-link">Retourner sur la page d'accueil</p>
      </Link>
    </main>
  );
};

export default Error404;
