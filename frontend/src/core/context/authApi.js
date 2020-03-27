// djsr/frontend/src/axiosApi.js

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('access_token') ? `JWT ${localStorage.getItem('access_token')}` : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;
        const storedAuthData = localStorage.getItem('authData');
        const refreshToken = storedAuthData ? storedAuthData.refreshToken : null;

        // test for token presence, no point in sending a request if token isn't present
        if (refreshToken && error.response.status === 401 && error.response.statusText === "Unauthorized") {

            return axiosInstance
                .post('/token/refresh/', { refresh: refreshToken })
                .then((response) => {
                    const authData = { accessToken: response.data.access, refreshToken: response.data.refresh };
                    window.localStorage.setItem('authData', JSON.stringify(authData));

                    axiosInstance.defaults.headers.Authorization = `JWT ${response.data.access}`;
                    originalRequest.headers.Authorization = `JWT ${response.data.access}`;

                    return axiosInstance(originalRequest);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        // specific error handling done elsewhere
        return Promise.reject({ ...error });
    }
);

export default axiosInstance;