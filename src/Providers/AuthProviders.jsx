/* eslint-disable react/prop-types */
import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "./firebaseinit";

export const AuthContext = createContext(null);

const AuthProviders = ({ childern }) => {
  
  const createuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    createuser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{childern}</AuthContext.Provider>
  );
};

export default AuthProviders;
