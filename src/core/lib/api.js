import axios from 'axios';
import {
    host
} from './constants';

const api = (baseURL = host, headers = {
    Authorization: localStorage.getItem('token') && `Bearer ${localStorage.getItem('token')}`
}) => axios.create({
    baseURL,
    headers
});

export default api;