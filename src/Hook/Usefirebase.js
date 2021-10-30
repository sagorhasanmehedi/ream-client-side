import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initalizefirebase from "../Firebase/Init.firebase";
initalizefirebase();

const Useirebase = () => {
  const [user, setuser] = useState({});
  const auth = getAuth();

  // google signin
  const googlesignin = () => {
    const googleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleprovider);
  };

  //   on user state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser({});
      }
    });
  }, []);

  //   sign out
  const signout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("email");
        setuser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    googlesignin,
    signout,
    user,
  };
};

export default Useirebase;
