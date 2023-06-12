import React, { createContext, useContext, useEffect, useState } from 'react'
import httpClient from '../api/httpClient';

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const requestInterceptor = httpClient.interceptors.request.use((config) => {
            setLoading(true);
            return config;
        });

        const responseInterceptor = httpClient.interceptors.response.use(
            (response) => {
                setLoading(false);
                return response;
            },
            (error) => {
                setLoading(false);
                return Promise.reject(error);
            }
        );

        console.log(loading);

        return () => {
            httpClient.interceptors.request.eject(requestInterceptor);
            httpClient.interceptors.response.eject(responseInterceptor);
        };
    }, [loading]);

    return (
        <LoadingContext.Provider value={{ loading }}>
            {children}
        </LoadingContext.Provider>
    );
}

const useLoading = () => useContext(LoadingContext);

export { useLoading, LoadingProvider };