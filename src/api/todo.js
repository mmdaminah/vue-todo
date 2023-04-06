import axios from 'axios';

const instance = axios.create({
    baseURL:
        'https://todo-8d597-default-rtdb.europe-west1.firebasedatabase.app',
    timeout: 1000,
});

instance.interceptors.request.use((config) => {
    return config;
});

instance.interceptors.response.use((res) => {
    return res;
});

export default instance;
