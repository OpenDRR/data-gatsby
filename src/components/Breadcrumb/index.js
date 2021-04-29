import React from "react";
import { Link } from "gatsby";

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav role="navigation" id="wb-bc" property="breadcrumb">
      <div>
        {crumbs.map((crumb) => {
          return (
            <div className="container" style={{ display: "inline" }}>
              <ol className="breadcrumb">
                <li>
                  <a href="https://www.canada.ca/en.html">Canada.ca</a>
                </li>
                <li>
                  <Link to="/">OpenDRR</Link>
                </li>
                <li>
                  <Link
                    to={crumb.pathname}
                    // style={{ ...crumb.crumbStyle }}
                    // activeStyle={{ ...crumb.crumbActiveStyle }}
                  >
                    {crumb.crumbLabel}
                  </Link>
                </li>
                {/* {crumb.crumbSeparator || " / "} */}
              </ol>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
export default Breadcrumb;
