import { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from './UserProvider';

const AuthenticationContext = createContext();
function AuthenticationProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { userName } = useUser();

    useEffect(() => {
        setIsAuthenticated(userName !== '');
    }, [userName]);

    return (
        <AuthenticationContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthenticationContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthenticationContext);

    if (!context) throw new Error('The contexte was used outside the profider');
    return context;
}

export { AuthenticationProvider, useAuth };
