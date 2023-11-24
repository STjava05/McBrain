import { useState,createContext } from 'react';


export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const[currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);


 const login = (user) => {
     setCurrentUser(user);
     localStorage.setItem("user", JSON.stringify(user));
 };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
    }

    const value = { currentUser, login, logout };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );


    

}

