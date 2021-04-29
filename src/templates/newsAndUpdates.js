import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { useBreadcrumb } from "gatsby-plugin-breadcrumb";
import Breadcrumb from "../components/Breadcrumb/index.jsx";
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: `${frontmatter.title}`,
  });
  return (
    <Layout>
      <div className="container">
        <div className="news">
          <Breadcrumb crumbs={crumbs} />
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="news-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY DD, MM")
        slug
        title
      }
    }
  }
`;
