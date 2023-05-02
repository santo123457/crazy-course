import React, { createContext, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    GoogleAuthProvider
  } from "firebase/auth";
import app from '../../Firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //  login With Google

    const googleLoginProvider = (provider)=>{
        return signInWithPopup(auth,provider)
    }


      // Log out from everywhere

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
     //  sending information with auth context;
      const AuthInfo ={
        googleLoginProvider,
        logOut

      }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;