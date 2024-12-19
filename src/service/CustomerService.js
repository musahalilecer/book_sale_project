import axios from "axios";

const BASE_URL = 'http://localhost:8080/customers';

class CustomerService{
    getCustomers(){
        return axios.get(`${BASE_URL}/`);
    }
    getCustomerById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    addCustomer(customer){
        return axios.post(`${BASE_URL}/`,customer);
    }
    updateCustomer(id, customer){
        return axios.put(`${BASE_URL}/${id}`, customer)
    }
    deleteCustomer(id){
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new CustomerService();