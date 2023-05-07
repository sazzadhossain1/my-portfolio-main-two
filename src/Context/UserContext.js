import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

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

  // LogOut user //
  const logOutUser = () => {
    return signOut(auth);
  };

  // get current user //

  const authInfo = {
    user,
    createUser,
    signInWithGoogle,
    loginUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
