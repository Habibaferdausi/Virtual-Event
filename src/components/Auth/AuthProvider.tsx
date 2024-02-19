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

// Create the authentication context
export const AuthContext = createContext<AuthInfo | undefined>(undefined);

// Initialize Firebase auth instance
const auth: Auth = getAuth(app);

const AuthProvider: React.FC = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  // Function to create a new user with email and password
  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign out the current user
  const logOut = () => {
    return signOut(auth);
  };

  // Function to update user profile
  const updateUser = (user: User, name: string, photo: string) => {
    return updateProfile(user, { displayName: name, photoURL: photo });
  };

  // Function to sign in with email and password
  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to sign in with Google
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  // Effect to listen for authentication state changes
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

  // Construct the authentication info object
  const authInfo: AuthInfo = {
    user,
    signIn,
    updateUser,
    logOut,
    loading: loading || !authChecked,
    createUser,
    googleLogin,
  };

  // Provide the authentication context to the application
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
