import React, { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import app from './../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);

    // creating an user through email and password start
    const createUserPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // creating an user through email and password end
    // sign in with email and password start
    const signInEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with email and password end

    const authInfo = {
        createUserPassword,
        signInEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;