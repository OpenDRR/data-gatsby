import React from "react";
import Layout from "../components/layout";
// import { Link } from "gatsby";
import ContactInfo from "../../content/data/yaml/contact.yaml";
import Breadcrumb from "../components/Breadcrumb";

const DatasetDetails = (props) => {
  const { pageContext } = props;
  const { details, name } = pageContext;
  return (
    <Layout>
      <div className="container">
        <Breadcrumb />
        {/* <div className="breadcrumb">
          <Link to="https:www.canada.ca/en.html">Canada.ca </Link>/
          <Link to="/en/Provinces-and-Territories">
            {" "}
            Provinces and Territories{" "}
          </Link>
          / Details
        </div> */}
        <div>
          {name.map((data, index) => {
            return <h1 key={`name_title_${index}`}>{data.title}</h1>;
          })}
        </div>
        <div className="">
            <div className="col-md-7" id="resource-desc">
              {details.map((item, index) => {
                return (
                  <p key={`details_description_${index}`}>{item.description}</p>
                );
              })}
            </div>
            {/* <div className="col-md-5 pull-right">
            <h2>Spatial Extent</h2>
            {details.map((item, index) => {
              return (
                <p key={`details_spatial_extent_${index}`}>
                  {item.spatial_extent}
                </p>
              );
            })}
          </div> */}
          </div>
          <div className="col-md-5 pull-right">
            <h2 id="wb-cont">Additional Information</h2>
      
            <b className="keywords">
              Keywords:{" "}</b>
              <span className="label label-default">Natural Disasters</span>
          
            <p className="publisher">
            <b>Publisher:</b> Natural Resources Canada{" "}
            </p>
            <div className="license-col">
              <b className="licence">Licence: </b>
              <a href="https:open.canada.ca/en/open-government-licence-canada">
                Open Government Licence - Canada
              </a>
            </div>
            <div>
              <div>
              <h2 id="wb-cont">Contact</h2>
              </div>
              <ul className="list-group">
              <li className="list-group-item"><b>Name:</b> {ContactInfo.contact.name}</li>
              <li className="list-group-item"><b>position:</b> {ContactInfo.contact.position}</li>
              <li className="list-group-item"><b>Address:</b> {ContactInfo.contact.address}</li>
              <li className="list-group-item"><b>Province:</b> {ContactInfo.contact.stateorprovince}</li>
              <li className="list-group-item"><b>Postal Code: </b>{ContactInfo.contact.postalcode}</li>
              <li className="list-group-item"><b>Country:</b> {ContactInfo.contact.country}</li>
              <li className="list-group-item"><b>Phone:</b> {ContactInfo.contact.phone}</li>
              <li className="list-group-item"><b>Fax:</b> {ContactInfo.contact.fax}</li>
              <li className="list-group-item"><b>Email: </b> <a href={ContactInfo.contact.email}> {ContactInfo.contact.email}</a></li>
              <li className="list-group-item"><a href={ContactInfo.contact.url}>{ContactInfo.contact.url}</a></li>
              <li className="list-group-item"><b>Hours:</b> {ContactInfo.contact.hours}</li>
              <li className="list-group-item"><b>Instructions:</b> {ContactInfo.contact.instructions}</li>
              </ul>
            </div>
          </div>
          <section div className="container">
          <table className="table table-hover container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Format</th>
              <th>Language</th>
              <th>Links</th>
            </tr>
          </thead>
        </table>
          </section>
        </div>
    </Layout>
  );
};
export default DatasetDetails;
