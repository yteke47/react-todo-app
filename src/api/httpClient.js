import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const getAuthToken = () => {
    return cookies.get('token') || '';
};

const httpClient = axios.create({
    baseURL: 'http://localhost:4523',
    responseType: 'json'
});

httpClient.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${getAuthToken()}`;
    return config;
});

export default httpClient;