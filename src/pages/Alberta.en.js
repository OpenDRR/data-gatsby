import React from "react";
import ABMapComponent from "../svg/AB-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";
import Breadcrumb from "../components/Breadcrumb/index.jsx";
const Alberta = ({ location }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Alberta",
  });
  return (
    <Layout>
      <SEO title="Alberta" lang="en" />
      <div className="container provincial-banner">
        <Breadcrumb crumbs={crumbs} />
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.enNameAB}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentAB.map((data, index) => {
              return (
                <li key={`enContentAB_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={ABMapComponent}
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
                  Lethbridge Medicine Hat (4810)
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
                      {YAMLData.downloads4810.map((data, index) => {
                        return (
                          <tr key={`downloads4810_${index}`}>
                            <td key={`downloads5910_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4810_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4810_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4810_threat_url_${index}`}>
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
                  Camrose Drumheller (4820)
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
                      {YAMLData.downloads4820.map((data, index) => {
                        return (
                          <tr key={`downloads4820_${index}`}>
                            <td key={`downloads4820_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4820_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4820_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4820_threat_url_${index}`}>
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
                  Calgary (4830)
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
                      {YAMLData.downloads4830.map((data, index) => {
                        return (
                          <tr key={`downloads4830_${index}`}>
                            <td key={`downloads4830_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4830_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4830_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4830_threat_url_${index}`}>
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
                  Banff Jasper Rocky Mountain House (4840)
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
                      {YAMLData.downloads4840.map((data, index) => {
                        return (
                          <tr key={`downloads4840_${index}`}>
                            <td key={`downloads4840_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4840_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4840_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4840_threat_url_${index}`}>
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
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Red Deer (4850)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
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
                      {YAMLData.downloads4850.map((data, index) => {
                        return (
                          <tr key={`downloads4850_${index}`}>
                            <td key={`downloads4850_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4850_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4850_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4850_threat_url_${index}`}>
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
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Edmonton (4860)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
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
                      {YAMLData.downloads4860.map((data, index) => {
                        return (
                          <tr key={`downloads4860_${index}`}>
                            <td key={`downloads4860_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4860_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4860_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4860_threat_url_${index}`}>
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
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  Athabasca Grande Prairie Peace River (4870)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
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
                      {YAMLData.downloads4870.map((data, index) => {
                        return (
                          <tr key={`downloads4870_${index}`}>
                            <td key={`downloads4870_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4870_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4870_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4870_threat_url_${index}`}>
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
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  Wood Buffalo Cold Lake (4880)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
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
                      {YAMLData.downloads4880.map((data, index) => {
                        return (
                          <tr key={`downloads4880_${index}`}>
                            <td key={`downloads4880_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4880_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4880_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4880_threat_url_${index}`}>
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

export default Alberta;
