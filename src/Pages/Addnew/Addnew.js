import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../Hook/UseAuth";
import "./Addnewservices.css";
import { Helmet } from "react-helmet";

const Addnew = () => {
  const { user } = useAuth();
  const [name, setname] = useState("");
  const [img, setimg] = useState("");
  const [des, setdes] = useState("");

  // hanndel name
  const handelname = (e) => {
    setname(e.target.value);
  };
  // hanndel images
  const handelimages = (e) => {
    setimg(e.target.value);
  };
  // hanndel discription
  const handeldiscription = (e) => {
    setdes(e.target.value);
  };

  //  handel submit
  const handelsubmit = (event) => {
    const adduser = user.email;
    const data = { name, img, des, adduser };

    axios.post("http://localhost:7000/addnew", data).then((res) => {
      if (res.data.acknowledged) {
        toast.success("Add Successful !", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });

    document.getElementById("name").value = "";
    document.getElementById("images").value = "";
    document.getElementById("discription").value = "";
    event.preventDefault();
  };

  return (
    <div className="addnew-parent">
      <Helmet>
        <title>ROAM | ADD NEW</title>
      </Helmet>

      <ToastContainer />
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>ADD NEW Destinations</h1>
          </div>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label for="name">Destinations Name</label>
                <input
                  onChange={handelname}
                  id="name"
                  type="text"
                  name="name"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label for="images">Images</label>
                <input
                  id="images"
                  type="text"
                  name="images"
                  required="required"
                  onChange={handelimages}
                />
              </div>
              <div className="form-group">
                <label for="discription">Discription</label>
                <input
                  id="discription"
                  type="text"
                  name="discription"
                  required="required"
                  onChange={handeldiscription}
                />
              </div>

              <div className="form-group">
                <button onClick={handelsubmit} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="form-panel two">
          <div className="form-header">
            <h1>Register Account</h1>
          </div>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label for="cpassword">Confirm Password</label>
                <input
                  id="cpassword"
                  type="password"
                  name="cpassword"
                  required="required"
                />
              </div>
              <div className="form-group">
                <label for="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                />
              </div>
              <div className="form-group">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pen-footer"></div>
    </div>
  );
};

export default Addnew;
