import { createContext, useContext } from "react";
// import { getAuth } from "firebase/auth";
// import App from "../App";

const AuthContext = createContext(null);

// const auth = getAuth(App);

const DataProvider = ({ children }) => {

    const user=null

    const AuthData = {
        user
    };

    return <AuthContext.Provider value={AuthData}>
        {children}
    </AuthContext.Provider>
}

const useDataGlobally = () => {
    return useContext(AuthContext)
}

export { DataProvider, useDataGlobally }