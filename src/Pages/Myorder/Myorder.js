import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "../../Hook/UseAuth";
import Useirebase from "../../Hook/Usefirebase";
import "./Myorder.css";

const Myorder = () => {
  const { user } = Useirebase();
  console.log(Useirebase());

  useEffect(() => {
    axios
      .post(
        `https://stormy-river-96202.herokuapp.com/findbooking?email=${user.email}`
      )
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="myorder-parent">
      <div className="">
        <h1 className="my-booking">MY BOOKING</h1>
        <div class="myorder-container">
          <img
            src="https://images.unsplash.com/photo-1549589237-9e70b6be4da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
            alt="Pancake"
          />
          <div class="container__text">
            <h1>Caramel Cake Pancakes</h1>
            <div class="container__text__star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p>
              If you're fan of caramel cake, then you'll love our Caramel Cake
              Pancakes. We Complete these over-the-top pancakes with Caramel
              Syrup.
            </p>
            <div class="container__text__timing">
              <div class="container__text__timing_time">
                <h2>Hands-on Time</h2>
                <p>30 min</p>
              </div>
              <div class="container__text__timing_time">
                <h2>Total Time</h2>
                <p>40 min</p>
              </div>
              <div class="container__text__timing_time">
                <h2>Yield</h2>
                <p>40 min</p>
              </div>
            </div>
            <button className="myorder-delete">delete</button>
            <button className="myorder-cancel bg-danger">cancel</button>
          </div>
        </div>
        <div class="myorder-container">
          <img
            src="https://images.unsplash.com/photo-1549589237-9e70b6be4da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
            alt="Pancake"
          />
          <div class="container__text">
            <h1>Caramel Cake Pancakes</h1>
            <div class="container__text__star">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p>
              If you're fan of caramel cake, then you'll love our Caramel Cake
              Pancakes. We Complete these over-the-top pancakes with Caramel
              Syrup.
            </p>
            <div class="container__text__timing">
              <div class="container__text__timing_time">
                <h2>Hands-on Time</h2>
                <p>30 min</p>
              </div>
              <div class="container__text__timing_time">
                <h2>Total Time</h2>
                <p>40 min</p>
              </div>
              <div class="container__text__timing_time">
                <h2>Yield</h2>
                <p>40 min</p>
              </div>
            </div>

            <button className="myorder-delete">delete</button>
            <button className="myorder-cancel bg-danger">cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myorder;
