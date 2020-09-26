import axios from 'axios';

const baseURL = "http://localhost:8000";

const authService = {
    async createUser(data){
        return axios.post(`${baseURL}/api/register`, data)
    },

    async login(data){
        return axios.post(`${baseURL}/api/login`, data)
    },

    storeCredentials(data){
        const parsedData = JSON.stringify(data);
        localStorage.setItem('user', parsedData);
    },

    getCredentials(){
        const data = JSON.parse(localStorage.getItem('user'))
        return data
    },

    clearCredentials(){
        localStorage.clear()
    }
}

export default authService;