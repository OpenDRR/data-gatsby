import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
const NationalDatasetsPage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
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
                <th>Last Updated</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody></tbody>
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