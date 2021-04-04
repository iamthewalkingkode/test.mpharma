import axios from 'axios';

const prefix = 'mpharma_';

// :: axios get
export const get = async (url, data = {}) => {
    return axios({
        method: 'GET', url,
        headers: {},
        params: data,
    }).then(response => {
        const res = response.data;
        return res;
    }).catch(error => {
        return { status: 606, result: 'Network request failed', error };
    });
}



// ::: storage helpers
export const setStorage = (key, value) => {
    if (key && value) {
        localStorage.setItem(prefix + key, value);
    }
}
export const getStorage = (key) => {
    const value = localStorage.getItem(prefix + key);
    return value || '';
}
export const setStorageJson = (key, value) => {
    if (key && value) {
        localStorage.setItem(prefix + key, JSON.stringify(value));
    }
}
export const getStorageJson = (key) => {
    if (key) {
        const value = localStorage.getItem(prefix + key);
        return JSON.parse(value) || [];
    }
}
export const delStorage = (key) => {
    if (key) {
        localStorage.removeItem(prefix + key);
    }
}