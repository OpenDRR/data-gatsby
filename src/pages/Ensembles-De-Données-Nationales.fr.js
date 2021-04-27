import React from "react";
import { Link } from "gatsby";
import LayoutFR from "../components/layoutFR";
const NationalDatasetsPage = () => {
  return (
    <LayoutFR>
      <div className="container">
        <div className="breadcrumb">
          <Link to="/fr/">Accueil</Link>
          <span> / Ensembles De Données Nationales </span>
        </div>
        <h1 id="wb-cont">Ensembles De Données Nationales</h1>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="NHSL">
          <h2>Couche Nationale Des Établissements Humains</h2>
          <hr />
          <p>
            La couche nationale des établissements humains (CNÉH) est une
            collection de jeux de données thématiques qui décrivent les
            caractéristiques physiques, sociales et économiques des centres
            urbains et des communautés rurales/éloignées du Canada, ainsi que
            leur vulnérabilité aux risques naturels préoccupants.
          </p>
          <Link to="/fr/nhsl">Explorez</Link>
        </section>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="SR">
          <h2>Risque sismique</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <th>Nom</th>
              <th>Date de modification</th>
              <th>Format</th>
            </thead>
            <tbody></tbody>
          </table>
          <p>Bientôt disponible</p>
        </section>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="ES">
          <h2>Scénarios de tremblement de terre</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <th>Nom</th>
              <th>Date de modification</th>
              <th>Format</th>
            </thead>
            <tbody></tbody>
          </table>
          <p>Bientôt disponible</p>
        </section>
      </div>
    </LayoutFR>
  );
};
export default NationalDatasetsPage;
