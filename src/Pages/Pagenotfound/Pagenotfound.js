import React from "react";
import "./Pagenotfound.css";
import img from "../../images/Na_June_37-ai.png";
import { useHistory } from "react-router";

const Pagenotfound = () => {
  const history = useHistory();
  const gohome = () => {
    history.push("/");
  };

  return (
    <div className="pagenotfound" style={{ backgroundImage: `url(${img})` }}>
      <div className="button-div">
        <button onClick={gohome} className="notfound-button">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Pagenotfound;
