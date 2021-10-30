import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UseAuth from "../../Hook/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Detail.css";

const Detailpage = () => {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  const { user } = UseAuth();

  console.log(user);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [addres, setaddres] = useState("");

  const handelname = (e) => {
    setname(e.target.value);
  };
  const handelemail = (e) => {
    setemail(e.target.value);
  };
  const handeladdres = (e) => {
    setaddres(e.target.value);
  };

  const handelsubmit = () => {
    const userinformation = { name, email, addres };
    data.email = user.email;
    data.status = "pending";
    data.userINFO = userinformation;

    axios
      .put(`https://stormy-river-96202.herokuapp.com/confirmbook/${id}`, data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Order Placed !", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });

    data.email = document.getElementById("namefild").value = "";
    document.getElementById("emailfild").value = "";
    document.getElementById("addresfild").value = "";
  };

  useEffect(() => {
    axios
      .post(`https://stormy-river-96202.herokuapp.com/singalebooking/${id}`)
      .then((res) => setdata(res.data));
  }, []);

  return (
    <div className="main-order-parent">
      <ToastContainer />

      <div class="order-parent">
        <div class="container-close">&times;</div>
        <img src={data.img} alt="" />
        <div class="container-text">
          <h2 className="order-heading">{data.name}</h2>
          <p>{data.des}</p>
          <input
            id="namefild"
            onChange={handelname}
            type="text"
            placeholder=" Name"
          />
          <input
            id="emailfild"
            onChange={handelemail}
            type="email"
            placeholder="Email "
          />
          <input
            id="addresfild"
            onChange={handeladdres}
            type="text"
            placeholder=" Address"
          />
          <button onClick={handelsubmit} type="submit">
            {" "}
            Confirm Booking
          </button>
          <span>No spams included</span>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
