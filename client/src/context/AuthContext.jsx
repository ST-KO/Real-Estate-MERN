import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(
        
        // "JSON.parse will convert the stored data string to original JS Object or array form"
        JSON.parse(localStorage.getItem("user")) || null 
    );
    
    // Set currentUser with use info  
    const updateUser = (data) => {
        setCurrentUser(data);
    };

    // Store the user info into local storage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    const contextValue = {
        currentUser,
        updateUser
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;