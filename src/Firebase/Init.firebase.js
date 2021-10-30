import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config.firebase";

const initalizefirebase = () => {
  initializeApp(firebaseConfig);
};

export default initalizefirebase;
