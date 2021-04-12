import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
const NationalDatasetsPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="breadcrumb">
          <Link to="/en/">Home</Link>
          <span> / National Datasets </span>
        </div>
        <h1 id="wb-cont">National Datasets</h1>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="NHSL">
          <h2>National Human Settlement Layers</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
               
                {/* <th>Format</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Natural Hazard Threats</th>
                
                <th>
                  <a
                    download
                    className="btn btn-primary btn-sm pull-right"
                    href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_hazard_threat_data"
                  >
                    Access
                  </a>
                </th>
              </tr>

              <tr>
                <th>Risk Dynamics</th>
            
                <th>
                  <a
                    download
                    className="btn btn-primary btn-sm pull-right"
                    href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_risk_dynamics_data"
                  >
                    Access
                  </a>
                </th>
              </tr>
              <tr>
                <th>Physical Exposure</th>
            
                <th>
                  <a
                    download
                    className="btn btn-primary btn-sm pull-right"
                    href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_physical_exposure_data"
                  >
                    Access
                  </a>
                </th>
              </tr>
              <tr>
                <th>Social Fabric and Capacity Thresholds</th>
               
                <th>
                  <a
                    download
                    className="btn btn-primary btn-sm pull-right"
                    href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_social_fabric_data"
                  >
                    Access
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </section>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="SR">
          <h2>Seismic Risk</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Updated</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <p>Coming Soon</p>
        </section>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="ES">
          <h2>Earthquake Scenarios</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Updated</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
          <p>Coming Soon</p>
        </section>
      </div>
    </Layout>
  );
};
export default NationalDatasetsPage;
