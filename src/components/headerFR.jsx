import React, { Component } from "react";
import Logo from "../images/sig-blk-en.svg";
import { Link } from "gatsby";

class HeaderFR extends Component {
  render() {
    return (
      <header style={{ marginTop: "30px" }}>
        <div className="row">
          <div id="wb-bnr" className="container">
            <section id="wb-lang" className="text-right">
              <h2 className="wb-inv">Language Selection</h2>
              <div
                className="brand col-xs-5 col-md-4"
                property="publisher"
                typeof="GovernmentOrganization"
              >
                <a href="https://www.canada.ca/fr.html">
                  <img className="" src={Logo} alt="logo" />
                </a>
              </div>
              <ul className="list-inline margin-bottom-none">
                <li>
                  <Link to="/en/">English</Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderFR;
