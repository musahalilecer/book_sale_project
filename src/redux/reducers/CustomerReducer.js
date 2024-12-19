import * as CustomerActionTypes from "../actions/CustomerActionTypes";

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CustomerActionTypes.CUSTOMERS_LOADING:
      return { ...state, loading: true, error: false };
    case CustomerActionTypes.CUSTOMERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case CustomerActionTypes.FETCH_CUSTOMERS_SUCCESS:
      return { ...state, customers: action.payload, loading: false };
    case CustomerActionTypes.FETCH_CUSTOMER_BY_ID_SUCCESS:
      return { ...state, selectedCustomer: action.payload, loading: false };
    case CustomerActionTypes.ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: [...state.customers, action.payload],
        loading: false,
      };
    case CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.map((customer) =>
          customer.id === action.payload.id ? action.payload : customer
        ),
        loading: false,
      };
    case CustomerActionTypes.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
        loading: false,
      };
      default:
        return state;
  }
};

export default CustomerReducer;