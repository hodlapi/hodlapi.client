import axios from 'axios';
import {
    host
} from './constants';
import EventBus from './eventBus';

const validateStatus = status => {
    status === 401 && EventBus.$emit('error.invalidToken');
    status === 404 && EventBus.$emit('error.notFound');
    return status >= 200 && status < 300;
};

const api = (baseURL = host, headers = {
    Authorization: localStorage.getItem('token') && `Bearer ${localStorage.getItem('token')}`
}) => axios.create({
    baseURL,
    headers,
    validateStatus
});

export default api;