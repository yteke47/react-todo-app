import httpClient from "./httpClient";

export const login = (values) => {
    return httpClient.post(`/login`, values);
};

export const register = (values) => {
    return httpClient.post(`/register`, values);
};