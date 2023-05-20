import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app) 

const AuthProvider = ({children}) => {
    //
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //created User
    const signin = (email, password) =>{
         return createUserWithEmailAndPassword(auth, email, password);
         setLoading(true);
    }
    //login user
    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true);
    }
    //
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser)
            setLoading(false)
        });
        return()=>{
            return unsubscribe();
        }
    },[])
    //logout user
    const logout = ()=>{
        return signOut(auth);
        setLoading(true)
    }
    //updated user name and photo img
      const updatedProfile = (name, photo)=>{
         return updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photo
         })
      }


    const authInfo ={
        user, 
        loading,
        signin,
        login,
        logout,
        updatedProfile,
    }
    return (
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
    );
};

export default AuthProvider;