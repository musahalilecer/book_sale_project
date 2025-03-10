import * as AuthorActionTypes from "../actions/AuthorActionTypes"
import AuthorService from "../../service/AuthorService"

const authorsLoading = () => ({
    type:AuthorActionTypes.AUTHORS_LOADİNG
});

const authorsError = (error) => ({
    type:AuthorActionTypes.AUTHORS_ERROR,
    payload: error,
});

export const fetchAuthors = () => async(dispatch) => {
    dispatch(authorsLoading());
    try{
        const response = await AuthorService.getAuthors();
        dispatch({
            type:AuthorActionTypes.FETCH_AUTHORS_SUCCESS,
            payload:response.data,
        });
    }
    catch(error){
        dispatch(authorsError(error.message))
    }
};
/*export const fetchBooks = () => async (dispatch) => {
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
*/

export const fetchAuthorById = (id) => async (dispatch) => {
    dispatch(authorsLoading());
    try{
        const response = await AuthorService.getAuthorById(id);
        dispatch({
            type:AuthorActionTypes.FETCH_AUTHOR_BY_ID_SUCCESS,
            payload: response.data
        });
    }
    catch(error){
        dispatch(authorsError(error.message));
    }
};

export const addAuthor = (author) => async (dispatch) => {
    try{
        const response = await AuthorService.addAuthor(author);
        dispatch({
            type: AuthorActionTypes.ADD_AUTHOR_SUCCESS,
            payload: response.data
        });
        return response;
    }
    catch(error){
        dispatch(authorsError(error.message));
    }
};

export const deleteAuthor = (id) => async (dispatch) => {
    try{
        await AuthorService.deleteAuthor(id);
        dispatch({
            type: AuthorActionTypes.DELETE_AUTHOR_SUCCESS,
            payload: id
        });
    }
    catch(error){
        dispatch(authorsError(error.message));
    }
};