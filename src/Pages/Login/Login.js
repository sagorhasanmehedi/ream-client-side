import React from "react";
import GoogleButton from "react-google-button";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hook/UseAuth";
import "./Login.css";

const Login = () => {
  const { googlesignin } = useAuth();

  const location = useLocation();
  const redirect_URL = location.state?.from || "/home";
  const history = useHistory();
  const redirectlogin = () => {
    googlesignin().then((result) => {
      localStorage.setItem("email", result.user.email);
      history.push(redirect_URL);
    });
  };

  return (
    <div className="login-parent">
      <div class="login-form">
        <img
          className="login-img"
          src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3"
          alt=""
        />

        <div className="google-button">
          <GoogleButton className="" onClick={redirectlogin} />
        </div>

        <a className="login-a" href="https://www.google.com/">
          Create account
        </a>
      </div>
    </div>
  );
};

export default Login;
