import React, { createContext } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const user = { displayName: "Sazzad Hossain" };

  // create user by email provider
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create user Google Provider //
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // login user by email and password //
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { user, createUser, signInWithGoogle, loginUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
