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
              Aerial view of Cape Town with Cape Town Stadium
            </h2>
            <p className="about-p">
              Lorem ipsum dolor sit amet. Lorem Ipsn gravida. Pro ain gravida
              nibh vel velit <br /> an auctor aliqueenean ollicitudin ain
              gravida nibh vel version an ipsum. Lorem <br /> ipsim dolor sit
              amet auctor aliqueenean.
            </p>
            <button className="about-button">BUY THEME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorworld;
