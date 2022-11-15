import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import app from './../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loadingState, setLoadingState] = useState(true);
    const [user, setUser] = useState(null)

    // creating an user through email and password start
    const createUserPassword = (email, password) => {
        setLoadingState(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // creating an user through email and password end
    // sign in with email and password start
    const signInEmail = (email, password) => {
        setLoadingState(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with email and password end
    // get currently signed in user start
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoadingState(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    // get currently signed in user end
    // signOut user start
    const logOut = () => {
        return signOut(auth)
    }
    // signOut user end
    // update user profile start
    const userUpdate = (info) => {
        return updateProfile(auth.currentUser, info)
    }
    // update user profile end


    const authInfo = {
        user,
        loadingState,
        setLoadingState,
        createUserPassword,
        signInEmail,
        logOut,
        userUpdate
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;