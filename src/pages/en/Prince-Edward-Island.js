import React from "react"
import PEIMapComponent from "../../svg/PEI-Generalized.svg"
import YAMLData from "../../../content/data/yaml/prov-terr.yaml"
import { Link } from "gatsby"
import { Accordion, Card, Button } from "react-bootstrap"
// import { MapContainer, TileLayer, LayersControl } from "react-leaflet"
// import  { EsriLeafletLayer } from "../../components/EsriLeafletLayer"


const PrinceEdwardIsland = () => {
  return (
    <>
      <div className="container provincial-banner">
      <div className="breadcrumb"><Link to="/en/Provinces-and-Territories">Provinces and Territories</Link> / Prince Edward Island</div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.enNamePEI}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentPEI.map((data, index) => {
              return (
                <li key={`enContentPEI_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              )
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={PEIMapComponent}
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
                )
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
                  Prince Edward Island (1110)
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
                      {YAMLData.downloads1110.map((data, index) => {
                        return (
                          <tr key={`downloads1110_${index}`}>
                            <td key={`downloads5910_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads1110_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads1110_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads1110_threat_url_${index}`}>
                              <a
                                className="btn btn-primary btn-sm pull-right"
                                href={data.url}
                                download
                              >
                                Download
                              </a>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>
    </>
  )
}

export default PrinceEdwardIsland