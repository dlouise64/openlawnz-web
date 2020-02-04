import React, { Component } from "react";
import SearchContainer from "../jsx/components/SearchContainer.jsx";
import Mission from "../jsx/components/Mission.jsx";
import InfoCard from "../jsx/components/InfoCard.jsx";
import InfoCardUnit from "../jsx/components/InfoCardUnit.jsx";
import ContactUs from "../jsx/components/ContactUs.jsx";
import News from "../jsx/components/News.jsx";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "normalize.css";
import "../scss/App.scss";

class Index extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="highlighted-content">
          <h1 className="header-title">
            OpenLaw NZ is a new, free legal research platform for New Zealand.
          </h1>
          <SearchContainer history={this.props.history} />
          <InfoCard>
            <InfoCardUnit one="30,141" two="CASES" />
            <div className="border"></div>
            <InfoCardUnit one="25,208" two="CASE-TO-CASE RELATIONSHIPS" />
            <div className="border"></div>
            <InfoCardUnit
              one="346,395"
              two="CASE-TO-LEGISLATION RELATIONSHIPS"
            />
          </InfoCard>
        </div>
        <div className="home-wrapper">
          <Mission />
          <News />
          <ContactUs />
        </div>
      </Layout>
    );
  }
}

export default Index;
