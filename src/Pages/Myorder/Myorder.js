import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hook/UseAuth";
import "./Myorder.css";
import { Helmet } from "react-helmet";

const Myorder = () => {
  const [data, setdata] = useState([]);
  const [condition, setcondition] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .post(`http://localhost:7000/findbooking?email=${user.email}`)
      .then((res) => setdata(res.data));
  }, [condition]);

  // delete order
  const orderdelete = (id) => {
    const provider = window.confirm("Are You Sure");
    if (provider) {
      axios.delete(`http://localhost:7000/deletebooking/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          toast.success("Order Placed !", {
            position: toast.POSITION.TOP_CENTER,
          });
          setcondition(!condition);
        }
      });
    }
  };

  // cancale order
  const handelcancel = (id) => {
    console.log(id);
  };

  return (
    <div className="myorder-parent">
      <Helmet>
        <title>ROAM | MY ORDER</title>
      </Helmet>

      <ToastContainer />
      <div className="">
        <h1 className="my-booking">MY BOOKING</h1>
        {data.map((DATA) => (
          <div class="myorder-container">
            <img src={DATA.img} alt="Pancake" />
            <div class="container__text">
              <h1>{DATA.name}</h1>
              <div class="container__text__star">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              <p className="order-detail-p">{DATA.des}</p>
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
                  <h2>Status</h2>
                  <p>{DATA.status}</p>
                </div>
              </div>
              <button
                onClick={() => handelcancel(DATA._id)}
                className="myorder-delete"
              >
                cancel
              </button>
              <button
                onClick={() => orderdelete(DATA._id)}
                className="myorder-cancel bg-danger"
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myorder;
