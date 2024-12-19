import axios from "axios";

const BASE_URL = 'http://localhost:8080/books'

class BookService{
    getBooks(){
        return axios.get(`${BASE_URL}/`);
    }
    getBookbyId(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    addBook(book){
        return axios.post(`${BASE_URL}/`, book);
    }
    updateBook(id, book){
        return axios.put(`${BASE_URL}/${id}`, book);
    }
    deleteBook(id){
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new BookService();