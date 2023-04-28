import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithCredential, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../fireBase/fireBase.config";

const AuthContext = createContext(null);

const auth = getAuth(app);

const DataProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const user = null

    const AuthData = {
        user,
        createUser,
        signInUser
    };

    return <AuthContext.Provider value={AuthData}>
        {children}
    </AuthContext.Provider>
}

const useDataGlobally = () => {
    return useContext(AuthContext)
}

export { DataProvider, useDataGlobally }