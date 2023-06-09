import { createContext, useState, useEffect, useContext } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    useEffect(() => {
        if (cookies.token) {
            setAuth(true);
        }
    }, [cookies.token]);

    const setUser = (user) => {
        try {
            setCookie('token', user.token, { secure: true });
            setAuth(true);
        } catch (error) {
            console.error('Failed to set user:', error);
        }
    };

    const logOut = () => {
        try {
            removeCookie('token', { secure: true });
            setAuth(false);
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    const values = { auth, setAuth, setUser, logOut };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };