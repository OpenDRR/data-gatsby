import React from "react";

const Breadcrumb = () => {
  return (
    <nav role="navigation" id="wb-bc" property="breadcrumb">
      <h2>You are here:</h2>
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <a href="https://www.canada.ca/en.html">Canada.ca</a>
          </li>
          <li>
            <a href="/en">Open Government</a>
          </li>

          <li>
            <a
              className=" active"
              href="/"
            >
              Active Monitoring of River ...
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
};
export default Breadcrumb;
