import React from "react";
import { Redirect, Route } from "react-router";

const Privateroute = ({ children, ...rest }) => {
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
