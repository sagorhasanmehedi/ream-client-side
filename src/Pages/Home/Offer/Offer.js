import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h1-parallax-2.jpg")`,
      }}
    >
      <div className="offer-parent">
        <div className="card-element">
          <div>
            <img
              className="left-side"
              src={
                "https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h2-img-1.png"
              }
              alt=""
            />
          </div>
          <div className="rigit-side">
            <h2 className="last-minut">Last Minute Offer</h2>
            <h5 className="arial-vew">
              Aerial view of Cape Town with Cape Town Stadium
            </h5>
            <p className="offer-p">
              This ROAM Holdings 2020 Sustainability Report provides an update
              <br /> on the progress of the company’s sustainability and
              corporate social
              <br /> responsibility activities from the 2020 fiscal year, unless
              specified
            </p>

            <button className="offere-button">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
