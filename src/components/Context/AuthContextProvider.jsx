import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../public/firebase.config";

export const AuthContextApi = createContext(null);

const createUser = (mail, password) =>
  createUserWithEmailAndPassword(auth, mail, password);

const signInUser = (mail, password) =>
  signInWithEmailAndPassword(auth, mail, password);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userInfo = { createUser, signInUser, user };
  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (user) => setUser(user));
    };
    return () => unsubscribe();
  }, []);
  return (
    <AuthContextApi.Prover value={userInfo}>{children}</AuthContextApi.Prover>
  );
};

export default AuthContextProvider;
