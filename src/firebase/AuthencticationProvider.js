import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext = createContext();


const AuthenticationProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthenticationProvider;