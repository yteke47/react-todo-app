import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const getAuthToken = () => {
    return cookies.get('token') || '';
};

const httpClient = axios.create({
    baseURL: 'https://yteke47-todo-app-backend.herokuapp.com',
    responseType: 'json'
});

httpClient.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${getAuthToken()}`;
    return config;
});

export default httpClient;