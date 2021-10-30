import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hook/UseAuth";

const Privateroute = ({ children, ...rest }) => {
  const { user } = useAuth();
  const useremail = localStorage.getItem("email");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        useremail ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Privateroute;
