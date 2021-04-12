import React from "react";
import { Link } from "gatsby";
import LayoutFR from "../components/layoutFR";
const NationalDatasetsPage = () => {
  return (
    <LayoutFR>
      <div className="container">
        <div className="breadcrumb">
          <Link to="/fr/">Accueil</Link>
          <span> / Ensembles de données nationales </span>
        </div>
        <h1 id="wb-cont">National Datasets</h1>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="NHSL">
          <h2>Couches Nationales D'etablissements Humains</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <th>Nom</th>
            </thead>
            <tbody>
              <tr>
                <th>Menaces Liées Aux Risques Naturels</th>
                <th>
                  <a
                    download
                    className="btn btn-primary btn-sm pull-right"
                    href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_hazard_threat_data"
                  >
                    Accès
                  </a>
                </th>
              </tr>

              <tr>
                <th>Dynamique du Risque</th>
                <th>
                  <a
                    download
                    className="btn btn-primary btn-sm pull-right"
                    href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_risk_dynamics_data"
                  >
                    Accès
                  </a>
                </th>
              </tr>
              <tr>
                <th>Exposition Physique</th>
                <th>
                  <a
                    download
                    className="btn btn-primary btn-sm pull-right"
                    href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_physical_exposure_data"
                  >
                    Accès
                  </a>
                </th>
              </tr>
              <tr>
                <th>Tissu Social et Seuils de Capacité</th>
                <th>
                  <a
                    download
                    className="btn btn-primary btn-sm pull-right"
                    href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_social_fabric_data"
                  >
                    Accès
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
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
