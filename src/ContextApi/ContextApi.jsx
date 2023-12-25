import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {auth} from '../firebase/firebase';
export const AuthContext= createContext({})

const ContextApi = ({children}) => {
     const [user, setUser] = useState(null)

     const signUp = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const login = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }
     const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          });
        };

        const LogOut = () => {
          return signOut(auth);
        }


        useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser)
          })
        }, [])
      


     const info = {
          user, 
          signUp,
          login,
          LogOut,
          updateUserProfile
     }

     return (
          <AuthContext.Provider value={info}>
            {children}   
          </AuthContext.Provider>
     );
};

export default ContextApi;