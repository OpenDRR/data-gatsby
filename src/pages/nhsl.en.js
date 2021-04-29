import React from "react";
import Layout from "../components/layout";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";
import Breadcrumb from "../components/Breadcrumb";

const NHSL = ({ location }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "National Human Settlement Layer",
  });
  function ReadMoreLess() {
    var dots = document.getElementById("dots");
    var moretext = document.getElementById("more");
    var btn = document.getElementById("nhslOne");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moretext.style.display = "none";
      btn.innerHTML = "Read more";
    } else {
      dots.style.display = "none";
      moretext.style.display = "inline";
      btn.innerHTML = "Read less";
    }
  }

  function ReadMoreLessLayer() {
    var layerDots = document.getElementById("layerDots");
    var layerMore = document.getElementById("layerMore");
    var btn = document.getElementById("nhslTwo");

    if (layerDots.style.display === "none") {
      layerDots.style.display = "inline";
      layerMore.style.display = "none";
      btn.innerHTML = "Read more";
    } else {
      layerDots.style.display = "none";
      layerMore.style.display = "inline";
      btn.innerHTML = "Read less";
    }
  }

  function PELayer() {
    var peDots = document.getElementById("peDots");
    var peMore = document.getElementById("peMore");
    var btn = document.getElementById("nhslThree");

    if (peDots.style.display === "none") {
      peDots.style.display = "inline";
      peMore.style.display = "none";
      btn.innerHTML = "Read more";
    } else {
      peDots.style.display = "none";
      peMore.style.display = "inline";
      btn.innerHTML = "Read less";
    }
  }

  function RDLayer() {
    var rdDots = document.getElementById("rdDots");
    var rdMore = document.getElementById("rdMore");
    var btn = document.getElementById("nhslFour");

    if (rdDots.style.display === "none") {
      rdDots.style.display = "inline";
      rdMore.style.display = "none";
      btn.innerHTML = "Read more";
    } else {
      rdDots.style.display = "none";
      rdMore.style.display = "inline";
      btn.innerHTML = "Read less";
    }
  }

  function SFLayer() {
    var sfDots = document.getElementById("sfDots");
    var sfMore = document.getElementById("sfMore");
    var btn = document.getElementById("nhslFive");

    if (sfDots.style.display === "none") {
      sfDots.style.display = "inline";
      sfMore.style.display = "none";
      btn.innerHTML = "Read more";
    } else {
      sfDots.style.display = "none";
      sfMore.style.display = "inline";
      btn.innerHTML = "Read less";
    }
  }

  return (
    <Layout>
      <div className="container">
        <Breadcrumb crumbs={crumbs} />

        <div className="row">
          <h1 id="wb-cont">National Human Settlement Layer</h1>
        </div>
        <div className="text">
          <p>
            The National Human Settlement Layer (NHSL) is a collection of
            thematic datasets that describe the physical, social and economic
            characteristics of urban centres and rural/remote communities across
            Canada, and their vulnerability to natural hazards of concern.
            Detailed information on land use, buildings, people and capital
            assets are provided at the Census Dissemination Area administrative
            level for more than 454,000 settled areas across Canada.
            <span id="dots">..</span>
            <span id="more">
              The Physical Exposure Layer includes a delineation of human
              settlement areas and related functional land use classes across
              Canada, and provides detailed information on construction type,
              occupancy and design level of more than 9.1 million buildings;
              population dynamics at different times of day for 35.1 million
              people, and; capital asset valuation of buildings and contents
              totaling more than 8.3 trillion CAD$. The Natural Hazard Threat
              Layer utilizes available national-level information on earthquake,
              flood, debris flow, wildfire, and severe wind hazards to evaluate
              the extent to which people and critical assets are situated in
              harm’s way; and the potential for socioeconomic disruptions in
              those areas where hazard intensities exceed minimum thresholds of
              damage. The Social Fabric Layer utilizes Census demographic data
              to evaluate broad spatial patterns of vulnerability, and
              neighbourhood-level capacities to withstand and recover from
              disaster events based on intrinsic characteristics of housing,
              family structure, individual autonomy and financial agency. The
              Risk Dynamics Layer utilizes information on population growth and
              land use change since 1975 to evaluate how evolving patterns of
              urbanization are contributing to escalating profiles of natural
              risk over time across Canada. Although developed to support
              quantitative risk assessments and implementation of the Sendai
              Framework for Disaster Risk Reduction at local and regional scales
              in Canada, the NHSL is also suitable for use in other integrated
              landscape modeling applications, including climate change
              adaptation and sustainable land use planning.
            </span>
          </p>
          <button onClick={ReadMoreLess} className="btn" id="nhslOne">
            Read more
          </button>
        </div>
        <div className="row">
          <h2>Layers</h2>
        </div>
        <div className="text">
          <h2>Hazard Threat</h2>
          <p>
            The Natural Hazard Threat component of the National Human Settlement
            Layer (NHSL) extends capabilities of the physical exposure model to
            address the question of who and what are susceptible to natural
            hazards of concern in Canada. It utilizes available national-level
            information on earthquake, flood, debris flow, wildfire, and severe
            wind hazards to evaluate the extent to which people and critical
            assets are situated in harm’s way (hazard exposure); and the
            potential for socioeconomic disruptions in those areas where hazard
            intensities are likely to exceed minimum thresholds of damage
            potential (hazard susceptibility).<span id="layerDots">..</span>
            <span id="layerMore">
              {" "}
              Earthquake hazard threats are assessed using 1/2500-year ground
              shaking intensity levels developed by the Geological Survey of
              Canada to evaluate minimum thresholds of building damage. Wildfire
              hazard threats are assessed using mean head fire intensity (HFI)
              levels developed by the Canadian Forest Service to evaluate
              community assets at risk. Debris Flow threats are based on a
              multi-variate landslide susceptibility model developed by NASA as
              part of a global early warning system for weather-triggered
              events. Tsunami, riverine flood and severe wind hazard threats are
              based on 1/500-year inundation and cyclone models developed as
              part of the 2011 Global Assessment Report on Disaster Risk
              Reduction (GAR) to inform disaster management efforts at regional
              and national scales. Susceptibility to individual hazards is
              estimated based on the numbers of people and critical assets
              exposed at the Census Dissemination Area level. The results are
              aggregated into a multi-hazard threat index to help identify
              hotspots of concern across Canada.
              <h2>Resources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/hazard_threat_en/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Web Services (WMS) Download
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/hazard_threat_en/MapServer">
                    (ESRI REST) ArcGIS Server portal
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_hazard_threat_data">
                    (FTP) Download package
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <button onClick={ReadMoreLessLayer} className="btn" id="nhslTwo">
            Read more
          </button>
        </div>

        <div className="text">
          <h2>Physical Exposure</h2>
          <p>
            The Physical Exposure component of the National Human Settlement
            Layer (NHSL) includes a delineation of built-up areas and related
            functional land use classes for Census Dissemination Areas in urban
            centres and rural/remote communities across Canada. It provides
            detailed information on construction type, occupancy and design
            level for more than 9.1 million buildings; population dynamics at
            different times of day for 35.1 million people, and; capital asset
            valuation of buildings and contents totalling more than 8.3 trillion
            CAD$.<span id="peDots">..</span>
            <span id="peMore">
              {" "}
              The building portfolio is classified using a combination of 36
              construction taxonomies that include different types of wood,
              concrete, masonry, steel and prefabricated structures; and 33
              occupancy classes that include a mix of residential, civic,
              commercial and industrial functional uses. Context-specific
              mapping schemes for each combination of land use, construction
              type and occupancy class are used to allocate a distribution of
              building classes that reflect the overall structural form and
              function of a given neighbourhood. Building populations at
              different times of day are estimated for standard workday hours
              when people are in offices, schools or other group facilities
              (9am-5pm); for morning and evening commute hours when people are
              in transit (7am-9am; 5pm-7pm), and; for evening hours when the
              majority of people are at home (7pm-7am). Capital asset valuation
              is based on industry replacement costs of building archetypes for
              representative regions across Canada. The building inventory is
              aligned with international standards for multi-hazard risk
              assessment and is suitable for use in other land use assessment
              applications that may require specific information on the form
              and/or function of the built environment.
              <h2>Resources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/physical_exposure_en/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Web Services (WMS) Download
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/physical_exposure_en/MapServer">
                    (ESRI REST) ArcGIS Server portal
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_physical_exposure_data">
                    (FTP) Download package
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <button onClick={PELayer} className="btn" id="nhslThree">
            Read more
          </button>
        </div>

        <div className="text">
          <h2>Risk Dynamics</h2>
          <p>
            The Risk Dynamics component of the National Human Settlement Layer
            (NHSL) builds on remote sensing analysis and spatial modeling
            carried out by the European Commission Joint Research Centre (JRC)
            as part of a global study of evolving human settlement patterns and
            their influence on disaster risk and sustainable development (GHSL).
            High-resolution population grids (250m) and land use classification
            models at decadal intervals (1975, 1990, 2000 and 2015) provide a
            framework for evaluating the extent to which human settlements are
            changing in terms of both density and spatial patterns of
            urbanization.<span id="rdDots">..</span>
            <span id="rdMore">
              {" "}
              These framework datasets are combined with available national
              assessments of earthquake, tsunami, flood, debris flow, wildfire
              and cyclone hazards to help make evident how population growth and
              evolving patterns of land use change over the past 40 years are
              contributing to escalating profiles of natural hazard risk in
              Canada. Indicators of physical exposure and hazard susceptibility
              are reported using the 250m GHSL population grid mesh for each
              time epochs. Outputs of this study complement a global assessment
              of exposure to natural hazards carried out by the JRC as part of
              the 2017 Atlas of the Human Planet and provide additional insights
              to inform local and regional disaster resilience planning efforts
              across Canada.
              <h2>Resources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/risk_dynamics_en/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Web Services (WMS) Download
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/risk_dynamics_en/MapServer">
                    (ESRI REST) ArcGIS Server portal
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_risk_dynamics_data">
                    (FTP) Download package
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <button onClick={RDLayer} className="btn" id="nhslFour">
            Read more
          </button>
        </div>

        <div className="text">
          <h2>Social Fabric and Capacity Thresholds</h2>
          <p>
            The Social Fabric component of the National Human Settlement Layer
            (NHSL) utilizes available Census demographic data to evaluate broad
            spatial patterns of vulnerability, and neighbourhood-level
            capacities to withstand and recover from disaster events based on
            characteristics of housing, family structure, individual autonomy
            and financial agency. Vulnerability and capacity threshold
            indicators help to identify underlying patterns of social inequity
            that may exist within a given community or region, and to address
            the question of who is likely to bear the greatest burden of risk
            following a disaster event.<span id="sfDots">..</span>
            <span id="sfMore">
              Levels of vulnerability for each component of the social
              vulnerability index are assessed using analytic methods adapted
              from the Cutter 'Hazards of Place Model' to screen and rank
              demographic variables based on their capacity to explain spatial
              patterns across a broad range of community archetypes including
              dense urban centres, surrounding suburban/exurban regions, and
              more distant rural and remote settlements. Composite indicators
              describing characteristics of housing conditions, family
              structure, individual autonomy and financial agency provide a
              means of comparing relative levels of vulnerability from one
              region to another across Canada and help identify specific
              neighbourhoods within which capacities to withstand and recover
              from disaster events may be strained. Indicators are reported at
              the Census Dissemination Area level and can be used in conjunction
              with information on specific hazard threats to identify both
              potential hotspots of concern within a community or region, and
              areas in which proactive investments in planning and capacity
              development may be effective in building disaster resilience and
              longer-term sustainability.
              <h2>Resources</h2>
              <ul>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/services/NRCan/social_fabric_en/MapServer/WMSServer?request=GetCapabilities&service=WMS">
                    Web Services (WMS) Download
                  </a>
                </li>
                <li>
                  <a href="https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/social_fabric_en/MapServer">
                    (ESRI REST) ArcGIS Server portal
                  </a>
                </li>
                <li>
                  <a href="https://ftp.maps.canada.ca/pub/nrcan_rncan/Earthquakes_Tremblement-de-terre/nhsl_social_fabric_data">
                    (FTP) Download package
                  </a>
                </li>
              </ul>
            </span>
          </p>
          <button onClick={SFLayer} className="btn" id="nhslFive">
            Read more
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default NHSL;
