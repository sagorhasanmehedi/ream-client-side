import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth";
import "./Nevagation.css";

const Nevigation = () => {
  const { user, signout } = useAuth();

  console.log(user.email);

  const signoutbutton = () => {
    signout();
  };
  return (
    <div className="header-parent-main">
      <div className="header-parent">
        <div className="">
          <img
            className="header-logo"
            src={
              "https://roam.qodeinteractive.com/wp-content/uploads/2017/08/ROAM_orange.png"
            }
            alt=""
          />
        </div>
        <div className="header-text">
          {user.email && (
            <img className="username" src={user.photoURL} alt="" />
          )}
          <NavLink to="/">
            <a href="">Home</a>
          </NavLink>
          {user.email && (
            <NavLink to="/manageorder">
              <a>Manage Order</a>
            </NavLink>
          )}
          {user.email && (
            <NavLink to="/addnew">
              <a href="">Add New</a>
            </NavLink>
          )}
          {user.email && (
            <NavLink to="/myorder">
              <a href="">My Order</a>
            </NavLink>
          )}

          {user.email ? (
            <button onClick={signoutbutton} className="header-login">
              Sign Out
            </button>
          ) : (
            <NavLink to="/login">
              <button className="header-login">Sign In</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nevigation;
