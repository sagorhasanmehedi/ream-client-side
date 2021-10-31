import React from "react";
import Banner from "../Banner/Banner";
import Explorworld from "../Explorworld/Explorworld";
import Offer from "../Offer/Offer";
import Pakage from "../Pakage/Pakage";
import "./Landingpage.css";
import { Helmet } from "react-helmet";

const Landingpage = () => {
  return (
    <div>
      <Helmet>
        <title>ROAM | HOME</title>
      </Helmet>
      <Banner />
      <Explorworld />
      <Offer />
      <Pakage />
    </div>
  );
};

export default Landingpage;
