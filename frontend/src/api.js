const axios = require('axios');

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(function (config) {
    const tokenKey = 'svested_token';
    if (window.localStorage.getItem(tokenKey)) {
        config.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem(tokenKey)}`;
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axios;
