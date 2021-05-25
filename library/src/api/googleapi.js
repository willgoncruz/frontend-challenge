const axios = require('axios');

const apiKey = '';
const baseURL = 'https://www.googleapis.com/books/v1';

const instance = axios.create({
    baseURL,
});

const requestGoogleApi = (url) => {
    return instance.get(`${url}&key=${apiKey}`);
}

export const searchVolumes = (searchTerm) => {
    return requestGoogleApi(`/volumes?q=${searchTerm}`);
}