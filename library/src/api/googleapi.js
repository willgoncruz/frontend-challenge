const axios = require('axios');

const PER_PAGE = 18;
const apiKey = '';
const baseURL = 'https://www.googleapis.com/books/v1';

const instance = axios.create({
    baseURL,
});

const requestGoogleApi = (url) => {
    return instance.get(`${url}&key=${apiKey}`);
}

export const searchVolumes = (searchTerm, page) => {
    const maxResults = page * PER_PAGE;
    return requestGoogleApi(`/volumes?q=${searchTerm}&maxResults=${maxResults}`);
}

export const getVolumeByID = (id) => {
    return requestGoogleApi(`/volumes/${id}?`);
}