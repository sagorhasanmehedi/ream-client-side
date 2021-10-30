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
              Lorem ipsum dolor sit amet. Lorem Ipsn gravida. Pro ain gravida
              nibh vel velit an auctor <br /> aliqueenean ollicitudin ain
              gravida nibh vel version an ipsum. Lorem ipsim dolor sit <br />{" "}
              amet auctor aliqueenean ollicitudin.
            </p>

            <button className="offere-button">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
