import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner-parent"
      style={{
        backgroundImage:
          "url(https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h2-video-background-img.jpg)",
      }}
    >
      <h1 className="banner-heading">
        Are You Ready to Set Forth <br /> on A New Voyage?
      </h1>
    </div>
  );
};

export default Banner;
