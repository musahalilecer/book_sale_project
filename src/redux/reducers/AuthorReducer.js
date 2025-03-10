import * as AuthorActionTypes from "../actions/AuthorActionTypes";

const initialState = {
    authors: [],
    selectedAuthor: null,
    loading: false,
    error: null
};

const AuthorReducer = (state = initialState, action) => {
    switch(action.type) {
        case AuthorActionTypes.AUTHORS_LOADİNG:
            return {...state, loading: true, error: null};

        case AuthorActionTypes.AUTHORS_ERROR:
            return {...state, loading: false, error: action.payload};

        case AuthorActionTypes.FETCH_AUTHORS_SUCCESS:
            return {...state, authors: action.payload, loading: false};

        case AuthorActionTypes.FETCH_AUTHOR_BY_ID_SUCCESS:
            return {...state, selectedAuthor: action.payload, loading: false};

        case AuthorActionTypes.ADD_AUTHOR_SUCCESS:
            return {...state, authors: [...state.authors, action.payload], loading: false};

        case AuthorActionTypes.DELETE_AUTHOR_SUCCESS:
            return {
                ...state, 
                authors: state.authors.filter((author) => author.id !== action.payload),
                loading: false
            };
            default:
                return state;
    }
};

export default AuthorReducer;