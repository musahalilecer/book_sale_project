import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import BookReducer from "./reducers/BookReducer";
import CustomerReducer from "./reducers/CustomerReducer";

const store = configureStore({
    reducer: {
        customers: CustomerReducer,
        books: BookReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;