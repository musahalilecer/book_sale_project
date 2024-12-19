import * as CustomerActionTypes from "./CustomerActionTypes"
import CustomerService from "../../service/CustomerService"

const customersLoading = () => ({
    type:CustomerActionTypes.CUSTOMERS_LOADING
});

const customersError = (error) => ({
    type:CustomerActionTypes.CUSTOMERS_ERROR,
    payload: error,
});

export const fetchCustomers = () => async (dispatch) => {
    dispatch(customersLoading());
    try{
        const response = await CustomerService.getCustomers();
        dispatch({
            type:CustomerActionTypes.FETCH_CUSTOMERS_SUCCESS,
            payload: response.data
        });
    }catch(error){
        dispatch(customersError(error));
    }
}

export const fetchCustomerById = (id) => async (dispatch)  => {
    dispatch(customersLoading());
    try{
        const response = await CustomerService.getCustomerById();
        dispatch({
            type: CustomerActionTypes.FETCH_CUSTOMER_BY_ID_SUCCESS,
            payload: response.data
        });
    }catch(error){
        dispatch(customersError(error));
    }
}
export const addCustomer = async (dispatch) => {
    dispatch(customersLoading());
    try {
        const response = await CustomerService.addCustomer();
        dispatch({
            type:CustomerActionTypes.ADD_CUSTOMER_SUCCESS,
            payload: response.data
        });
    }
    catch(error) {
        dispatch(customersError(error));
    }
}

export const updateCustomer = (id, customer) => async(dispatch) => {
    dispatch(customersLoading());
    try{
        const response = await CustomerService.updateCustomer(id, customer);
        dispatch({
            type:CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS,
            payload: response.data
        })
    }
    catch(error){
        dispatch(customersError(error));
    }
}

export const deleteCustomer = (id) => async(dispatch) => {
    try{
        await CustomerService.deleteCustomer(id);
        dispatch({
            type:CustomerActionTypes.DELETE_CUSTOMER_SUCCESS,
            payload: id,
        });
    }
    catch(error){
        dispatch(customersError(error.message));
    }
};