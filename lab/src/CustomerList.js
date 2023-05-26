import React, { useContext, useState } from 'react';
import { CustomerContext } from './CustomerContext';

export const CustomerList = () => {
  const { customers, deleteCustomer, editCustomer, addCustomer } = useContext(CustomerContext);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = (id) => {
    deleteCustomer(id);
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedCustomer = {
      id: editingCustomer.id,
      name: formData.get('name'),
      address: formData.get('address'),
      phone: formData.get('phone'),
    };
    editCustomer(updatedCustomer);
    setEditingCustomer(null);
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCustomer = {
      name: formData.get('name'),
      address: formData.get('address'),
      phone: formData.get('phone'),
    };
    addCustomer(newCustomer);
    setShowAddForm(false);
  };

  const renderCustomers = () => {
    return customers.map((customer) => {
      return (
        <tr key={customer.id}>
          <td>{customer.name}</td>
          <td>{customer.address}</td>
          <td>{customer.phone}</td>
          <td>
            <button onClick={() => handleEdit(customer)}>Edit</button>
            <button onClick={() => handleDelete(customer.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  const renderEditForm = () => {
    if (!editingCustomer) {
      return null;
    }
    return (
      <div>
        <h3>Edit Customer</h3>
        <form onSubmit={handleEditSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" defaultValue={editingCustomer.name} />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" defaultValue={editingCustomer.address} />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" defaultValue={editingCustomer.phone} />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };

  const renderAddForm = () => {
    if (!showAddForm) {
      return null;
    }
    return (
      <div>
        <h3>Add Customer</h3>
        <form onSubmit={handleAddSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" />
          </div>
          <button type="submit">Add</button>
        </form>
          <button type="submit">Save</button>
      </div>
    );
};
};
