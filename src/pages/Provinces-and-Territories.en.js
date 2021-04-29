import React from "react";
import { Link } from "gatsby";
import "../components/SVGMapComponent/mapstyles.css";
import Map from "../components/MapOfCanada/map";
import Layout from "../components/layout";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";
import Breadcrumb from "../components/Breadcrumb/index.jsx";

const ProvincesAndTerritories = ({ location }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Provinces and Territories",
  });
  return (
    <Layout>
      <div className="container">
        <Breadcrumb crumbs={crumbs} />
        <h1 id="wb-cont">Province And Territory Datasets</h1>
      </div>
      <section>
        <div className="container">
          <h4>Select a Province or Territory to continue:</h4>
          <Map />
        </div>
      </section>
      <section>
        <div className="container">
          <hr />
          <ul>
            <li className="col-md-4">
              <Link to="/en/Alberta">Alberta</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/British-Columbia">British Columbia</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Saskatchewan">Saskatchewan</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Manitoba">Manitoba</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/New-Brunswick">New Brunswick</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Newfoundland-and-Labrador">
                Newfoundland and Labrador
              </Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Nova-Scotia">Nova Scotia</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Northwest-Territories">Northwest Territories</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Nunavut">Nunavut</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Ontario">Ontario</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Prince-Edward-Island">Prince Edward Island</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Quebec">Quebec</Link>
            </li>
            <li className="col-md-4">
              <Link to="/en/Yukon">Yukon</Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default ProvincesAndTerritories;
