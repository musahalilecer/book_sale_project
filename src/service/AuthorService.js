import axios from "axios";

const BASE_URL = 'http://localhost:8080/authors'

class AuthorService {
    setAuthors(){
        return axios.get(`${BASE_URL}/`)
    }
    addAuthor(author){
        return axios.post(`${BASE_URL}/`,author);
    }
    deleteAuthor(id){
        return axios.delete(`${BASE_URL}/${id}`);
    }
}