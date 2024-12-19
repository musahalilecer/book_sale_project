import React, { useState, useEffect } from "react";
import "../style/Customer.css";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../component/Footer";
import {
  fetchCustomers,
  deleteCustomer,
} from "../redux/actions/CustomerAction";

const Customer = () => {
 
  const dispatch = useDispatch();
  const { customers, loading, error } = useSelector(
    (state) => state.customers
  );
  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const handleDeleteCustomer = (id) => {
    dispatch(deleteCustomer(id));
  };
/*
  const groupCustomers = (customers) => {
    const grouped = [];
    for(let i=0 ; i<customers.length ; i+=3){
      grouped.push(customers.slice(i, i+3));
    }
    return grouped;
  };
  */

console.log(customers);
for(let i=0 ; i<customers.lenght ; i++){
  console.log(customers.id[i]);
}
  
  return (
    <div className="customer-container">
      <div className="customer-body">
        <h1 className="customer-title">Customer List</h1>
        <div className="customer-table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>
                    <img
                      src={customer.image}
                      alt={`${customer.username}'s profile`}
                      className="customer-image"
                    />
                  </td>
                  <td>{customer.username}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteCustomer(customer.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Customer;
