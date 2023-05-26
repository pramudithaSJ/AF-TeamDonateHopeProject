import React, { createContext, useState } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St, Anytown, USA',
      phone: '555-1234',
    },
    {
      id: 2,
      name: 'Jane Smith',
      address: '456 Park Ave, Somewhere, USA',
      phone: '555-5678',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      address: '789 Elm St, Nowhere, USA',
      phone: '555-9012',
    },
  ]);

  const addCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  const deleteCustomer = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  const editCustomer = (id, updatedCustomer) => {
    const updatedCustomers = customers.map((customer) => {
      if (customer.id === id) {
        return { ...customer, ...updatedCustomer };
      }
      return customer;
    });
    setCustomers(updatedCustomers);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, deleteCustomer, editCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  );
};
