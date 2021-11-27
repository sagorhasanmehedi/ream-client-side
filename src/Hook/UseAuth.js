import { useContext } from "react";
import { Mycontext } from "../Pages/Context/Authprovider";

const useAuth = () => {
  return useContext(Mycontext);
};

export default useAuth;


hellow world