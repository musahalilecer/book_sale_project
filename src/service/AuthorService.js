import axios from "axios";

const BASE_URL = 'http://localhost:8080/authors'

class AuthorService {
    getAuthors(){
        return axios.get(`${BASE_URL}`)
    }
    getAuthorById(id){
        return axios.get(`${BASE_URL}/${id}`)
    }
    addAuthor(author){
        return axios.post(`${BASE_URL}/`,author);
    }
    deleteAuthor(id){
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new AuthorService;