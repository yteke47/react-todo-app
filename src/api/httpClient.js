import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
const baseURL = process.env.API_URL || "/";

const getAuthToken = () => {
    return cookies.get('token') || '';
};

const httpClient = axios.create({
    baseURL,
    responseType: 'json'
});

httpClient.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${getAuthToken()}`;
    return config;
});

export default httpClient;