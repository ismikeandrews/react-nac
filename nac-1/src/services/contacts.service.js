import axios from 'axios';

const baseURL = "http://localhost:8000";

const contactsService = {
    async getContactList(){
        return axios.get(`${baseURL}/api/contacts`);
    },

    async getContactById(id){
        return axios.get(`${baseURL}/api/contacts/${id}`);
    },

    async setContact(data){
        return axios.post(`${baseURL}/api/contacts`, data);
    },

    async updateContact(id, data){
        return axios.put(`${baseURL}/api/contacts/${id}`, data);
    },

    async deleteContact(id){
        return axios.delete(`${baseURL}/api/contacts/${id}`);
    }
}

export default contactsService;