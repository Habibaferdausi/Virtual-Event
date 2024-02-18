"use client";

import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  Auth,
} from "firebase/auth";
import app from "../../app/firebaseConfig"

interface AuthInfo {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  updateUser: (user: User, name: string, photo: string) => Promise<void>;
  logOut: () => Promise<void>;
  loading: boolean;
  createUser: (email: string, password: string) => Promise<void>;
  googleLogin: () => Promise<void>;
}

export const AuthContext = createContext<AuthInfo | undefined>(undefined);

const auth: Auth = getAuth(app);

const AuthProvider: React.FC = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUser = (user: User, name: string, photo: string) => {
    return updateProfile(user, { displayName: name, photoURL: photo });
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoading(false);
      setAuthChecked(true);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo: AuthInfo = {
    user,
    signIn,
    updateUser,
    logOut,
    loading: loading || !authChecked,
    createUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
