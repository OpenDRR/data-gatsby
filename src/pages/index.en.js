import React from "react";
// import { Link } from "gatsby"
import SEO from "../components/seo";
import Banner from "../components/Banner";
import HomeCardGrid from "../components/homeCardGrid";
import { SliderData } from "../../config/SliderData";
import Layout from "../components/layout";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";
import Breadcrumb from "../components/Breadcrumb";

const IndexPage = ({ location }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "OpenDRR Home",
  });
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container home">
        <Breadcrumb crumbs={crumbs} />
        <h1>OpenDRR Downloads</h1>
        <p>
          Welcome to the OpenDRR data download site. Here you will find the
          latest versions of all datasets.
        </p>
        <p>
          These datasets are available for download by Province/Territory and by
          Economic Region.
        </p>

        <Banner slides={SliderData} />
        <HomeCardGrid />
      </div>
    </Layout>
  );
};
export default IndexPage;
