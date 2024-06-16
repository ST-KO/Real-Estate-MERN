import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        
        // "JSON.parse will convert the stored data string to original JS Object or array form"
        JSON.parse(localStorage.getItem("user")) || null 
    );

    const value = {currentUser};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;