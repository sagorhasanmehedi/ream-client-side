import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Pakage.css";

const Pakage = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://stormy-river-96202.herokuapp.com/services")
      .then((res) => setdata(res.data));
  }, []);

  const history = useHistory();
  const godetail = (id) => {
    history.push(`/detailpage/${id}`);
  };
  return (
    <div className="card-parent">
      <div className="">
        <div className="card-text">
          <h5 className="modern">Modern & Beautiful</h5>
          <h3 className="our-adven">Our Most Popular Adventures</h3>
          <p className="card-p">
            Lorem ipsum dolor sit amet, ad mea porro integre, feugiat
            efficiantur vis eu, te sit illum dolorum. Fugit <br /> scriptorem
            mea at. Ad eros invenire incorrupte nam, vim in mazim scripserit.
          </p>
        </div>
        <div class="grid">
          {data.map((DATA) => (
            <div class="grid__item">
              <div class="card">
                <img class="card__img" src={DATA.img} alt="Snowy Mountains" />
                <div class="card__content">
                  <h1 class="card__header">{DATA.name}</h1>
                  <p class="card__text">{DATA.des}</p>
                  <button onClick={() => godetail(DATA._id)} class="card__btn">
                    Explore <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pakage;
