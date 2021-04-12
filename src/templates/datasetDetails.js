import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import ContactInfo from "../../content/data/yaml/contact.yaml";
import Breadcrumb from '../components/Breadcrumb'

const DatasetDetails = (props) => {
  const { pageContext } = props;
  const { details, name } = pageContext;
  return (
    <Layout>
      <div className="container">
        <Breadcrumb />
        <div className="breadcrumb">
          <Link to="https:www.canada.ca/en.html">Canada.ca </Link>/
          <Link to="/en/Provinces-and-Territories">
            {" "}
            Provinces and Territories{" "}
          </Link>
          / Details
        </div>
        <div>
          {name.map((data, index) => {
            return <h1 key={`name_title_${index}`}>{data.title}</h1>;
          })}
        </div>
        <section className="">
          <div id="resource-desc" className="pull-left">
            {details.map((item, index) => {
              return (
                <p key={`details_description_${index}`}>{item.description}</p>
              );
            })}
          </div>
        </section>
        <section>
          <div className="">
            <h2>Spatial Extent</h2>
            {details.map((item, index) => {
              return (
                <p key={`details_spatial_extent_${index}`}>
                  {item.spatial_extent}
                </p>
              );
            })}
          </div>
        </section>
        <section>
          <aside className="">
            <h2 id="wb-cont">Additional Information</h2>
            <p className="contact-email">
              Contact Email:{" "}
              <a href="mailto:nrcan.egs-sgu.rncan@canada.ca">
                nrcan.egs-sgu.rncan@canada.ca
              </a>
            </p>
            <p className="keywords">
              Keywords:{" "}
              <span className="label label-default">Natural Disasters</span>
            </p>
            <p className="publisher">
              Publisher - Current Organization Name: Natural Resources Canada{" "}
            </p>
            <div className="license-col">
              <p className="licence">Licence: </p>
              <a href="https:open.canada.ca/en/open-government-licence-canada">
                Open Government Licence - Canada
              </a>
            </div>
            <div className="">
              <div className="">
                <div className="panel-title">Contact</div>
              </div>
              <p>Name: {ContactInfo.contact.name}</p>
              <p>Position: {ContactInfo.contact.position}</p>
              <p>Address: {ContactInfo.contact.address}</p>
              <p>Province: {ContactInfo.contact.stateorprovince}</p>
              <p>Postal Code: {ContactInfo.contact.postalcode}</p>
              <p>Country: {ContactInfo.contact.country}</p>
              <p>Phone: {ContactInfo.contact.phone}</p>
              <p>Fax: {ContactInfo.contact.fax}</p>
              <p>Email: {ContactInfo.contact.email}</p>
              <p>{ContactInfo.contact.url}</p>
              <p>Hours: {ContactInfo.contact.hours}</p>
              <p>Instructions: {ContactInfo.contact.instructions}</p>
              <p>Role: {ContactInfo.contact.role}</p>
            </div>
          </aside>
        </section>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Resource Name</th>
              <th>Resource Type</th>
              <th>Format</th>
              <th>Language</th>
              <th>Links</th>
            </tr>
          </thead>
        </table>
      </div>
    </Layout>
  );
};
export default DatasetDetails;
