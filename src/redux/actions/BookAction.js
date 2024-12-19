import * as BookActionTypes from "./BookActionTypes"
import BookService from "../../service/BookService"

const booksLoading = () => ({
    type:BookActionTypes.BOOKS_LOADING
});

const booksError = (error) => ({
    type:BookActionTypes.BOOKS_ERROR,
    payload: error,
});

export const fetchBooks = () => async (dispatch) => {
    dispatch(booksLoading());
    try{
        const response = await BookService.getBooks();
        dispatch({
            type: BookActionTypes.FETCH_BOOKS_SUCCESS,
            payload:response.data,
        });
    }
    catch(error){
        dispatch(booksError(error.message))
    }
};

export const fetchBooksById = (id) => async (dispatch) => {
    dispatch(booksLoading());
    try{
        const response = await BookService.getBookbyId(id);
        dispatch({
            type:BookActionTypes.FETCH_BOOK_BY_ID_SUCCESS,
            payload:response.data,
        });
    }
    catch(error){
        dispatch(booksError(error.message));
    }
};

export const addBook = (book) => async (dispatch) => {
    try{
        const response = await BookService.addBook(book);
        dispatch({
            type:BookActionTypes.ADD_BOOK_SUCCESS,
            payload:response.data,
        });
    }
    catch(error){
        dispatch(booksError(error.message));
    }
};

export const updateBook = (id, book) => async (dispatch) => {
    try{
        const response = await BookService.updateBook(id, book);
        dispatch({
            type:BookActionTypes.UPDATE_BOOK_SUCCESS,
            payload:response.data,
        });
    }
    catch(error){
        dispatch(booksError(error.message));
    }
};

export const deleteBook = (id) => async (dispatch) => {
    try{
        await BookService.deleteBook(id);
        dispatch({
            type:BookActionTypes.DELETE_BOOK_SUCCESS,
            payload:id,
        });
    }
    catch(error){
        dispatch(booksError(error.message));
    }
};


/*
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS"
export const FETCH_BOOK_BY_ID_SUCCESS = "FETCH_BOOK_BY_ID_SUCCESS"
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS"
export const UPDATE_BOOK_SUCCESS = "UPDATE_BOOK_SUCCESS"
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS"

export const BOOKS_LOADING = "BOOKS_LOADING"
export const BOOKS_ERROR = "BOOKS_ERROR"
*/
