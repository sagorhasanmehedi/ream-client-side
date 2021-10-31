import React from "react";
import "./Explorworld.css";

const Explorworld = () => {
  return (
    <div className="explor-parent">
      <div className="explor-parent">
        <div className="explor">
          <div className="img-section">
            <img
              src={
                "https://roam.qodeinteractive.com/wp-content/uploads/2017/08/about-1-img-1.jpg"
              }
              alt=""
              srcset=""
            />
          </div>
          <div className="text-section">
            <h2 className="about-agency">About Our Agency</h2>
            <h2 className="about-caption">
              The world’s leading online travel and related services.
            </h2>
            <p className="about-p">
              ROAM Holdings is the world’s leading provider of online travel and
              services, <br /> provided to consumers and local partners in more
              in than 220 countries and <br /> territories through six primary
              consumer-facing brands: Roam.com, Priceline <br />
            </p>
            <button className="about-button">BUY THEME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorworld;
