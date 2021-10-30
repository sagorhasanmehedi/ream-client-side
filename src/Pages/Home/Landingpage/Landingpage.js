import React from "react";
import Banner from "../Banner/Banner";
import Explorworld from "../Explorworld/Explorworld";
import Offer from "../Offer/Offer";
import Pakage from "../Pakage/Pakage";
import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div>
      <Banner />
      <Explorworld />
      <Offer />
      <Pakage />
    </div>
  );
};

export default Landingpage;
