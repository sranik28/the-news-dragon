import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../fireBase/fireBase.config";

const AuthContext = createContext();

const auth = getAuth(app);

const DataProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("logged in user", loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    const AuthData = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    };

    return <AuthContext.Provider value={AuthData}>
        {children}
    </AuthContext.Provider>
}

const useDataGlobally = () => {
    return useContext(AuthContext)
}

export { DataProvider, useDataGlobally }