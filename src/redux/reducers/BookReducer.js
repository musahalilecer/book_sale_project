import * as BookActionTypes from "../actions/BookActionTypes";

const initialState = {
    books: [],
    selectedBook: null,
    loading: false,
    error: null,
};

const BookReducer = (state= initialState, action) => {
    switch(action.type) {
        case BookActionTypes.BOOKS_LOADING:
            return { ...state, loading: true, error: null };

        case BookActionTypes.BOOKS_ERROR:
            return { ...state, loading: false, error: action.payload};

        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return { ...state, books: action.payload, loading: false};

        case BookActionTypes.FETCH_BOOK_BY_ID_SUCCESS:
            return { ...state, selectedBook: action.payload, loading: false};

        case BookActionTypes.ADD_BOOK_SUCCESS:
            return { ...state, books: [...state.books, action.payload], loading: false};

        case BookActionTypes.UPDATE_BOOK_SUCCESS:
            return {
                ...state,
                books: state.books.map((book) => 
                    book.id === action.payload.id ? action.payload: book
                ),
                loading: false,
        };

        case BookActionTypes.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
                loading: false
            };
        default:
            return state;
    }
};

export default BookReducer;