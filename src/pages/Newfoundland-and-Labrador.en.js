import React from "react";
import NLMapComponent from "../svg/NL-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";

const NewfoundlandAndLabrador = () => {
  return (
    <Layout>
      <div className="container provincial-banner">
        <div className="breadcrumb">
          <Link to="/en/Provinces-and-Territories">
            Provinces and Territories
          </Link>{" "}
          / Newfoundland and Labrador
        </div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.enNameNL}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentNL.map((data, index) => {
              return (
                <li key={`enContentNL_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={NLMapComponent}
            alt="Economic Regions of Alberta Map"
          />
        </section>
      </div>
      <section className="container">
        <div>
          <h2>Provincial Level Datasets</h2>
          <table
            className="table table-hover"
            style={{
              marginTop: "5vh",
            }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Modified</th>
                <th>Format</th>
              </tr>
            </thead>
            <tbody>
              {YAMLData.downloads.map((data, index) => {
                return (
                  <tr key={`downloads_${index}`}>
                    <td key={`downloads_file_title_${index}`}>{data.title}</td>
                    <td key={`downloads_file_lastUpdated_${index}`}>
                      {data.lastUpdated}
                    </td>
                    <td key={`downloads_file_format_${index}`}>
                      <span className="label label-default">{data.format}</span>
                    </td>
                    <td key={`downloads_file_url_${index}`}>
                      <a
                        className="btn btn-primary btn-sm pull-right"
                        href={data.url}
                        download
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <h2>Economic Region Level Datasets</h2>
          <Accordion
            defaultActiveKey="0"
            style={{
              marginBottom: "20vh",
              marginTop: "5vh",
            }}
          >
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Avalon Peninsula (1010)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads1010.map((data, index) => {
                        return (
                          <tr key={`downloads1010_${index}`}>
                            <td key={`downloads1010_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads1010_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads1010_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads1010_threat_url_${index}`}>
                            <Link
                                className="btn btn-primary btn-sm pull-right"
                                to={data.url}
                              >
                                Access
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  South Coast Burin Peninsula (1020)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads1020.map((data, index) => {
                        return (
                          <tr key={`downloads1020_${index}`}>
                            <td key={`downloads1020_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads1020_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads1020_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads1020_threat_url_${index}`}>
                            <Link
                                className="btn btn-primary btn-sm pull-right"
                                to={data.url}
                              >
                                Access
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  West Coast Northern Peninsula Labrador (1030)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads1030.map((data, index) => {
                        return (
                          <tr key={`downloads1030_${index}`}>
                            <td key={`downloads1030_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads1030_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads1030_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads1030_threat_url_${index}`}>
                            <Link
                                className="btn btn-primary btn-sm pull-right"
                                to={data.url}
                              >
                                Access
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Notre Dame Central Bonavista Bay (1040)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads1040.map((data, index) => {
                        return (
                          <tr key={`downloads1040_${index}`}>
                            <td key={`downloads1040_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads1040_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads1040_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads1040_threat_url_${index}`}>
                            <Link
                                className="btn btn-primary btn-sm pull-right"
                                to={data.url}
                              >
                                Access
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default NewfoundlandAndLabrador;
