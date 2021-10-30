import React, { createContext } from "react";
import Useirebase from "../../Hook/Usefirebase";

export const Mycontext = createContext();
const Authprovider = ({ children }) => {
  return (
    <Mycontext.Provider value={Useirebase()}>{children}</Mycontext.Provider>
  );
};

export default Authprovider;
