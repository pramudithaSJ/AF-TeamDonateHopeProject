import React, { useContext, useState } from 'react';
import { EquipmentContext } from './EquipmentContext';

export const EquipmentList = () => {
  const { equipment, deleteEquipment, editEquipment } = useContext(EquipmentContext);
  const [editingEquipment, setEditingEquipment] = useState(null);

  const handleDelete = (id) => {
    deleteEquipment(id);
  };

  const handleEdit = (item) => {
    setEditingEquipment(item);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedEquipment = {
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      available: formData.get('available') === 'true',
    };
    editEquipment(editingEquipment.id, updatedEquipment);
    setEditingEquipment(null);
  };

  const renderEquipment = () => {
    return equipment.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.available ? 'Yes' : 'No'}</td>
          <td>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  const renderEditForm = () => {
    if (!editingEquipment) {
      return null;
    }
    return (
      <div>
        <h3>Edit Equipment</h3>
        <form onSubmit={handleEditSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" defaultValue={editingEquipment.name} />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" defaultValue={editingEquipment.description} />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" defaultValue={editingEquipment.price} />
          </div>
          <div>
            <label htmlFor="available">Available:</label>
            <select id="available" name="available" defaultValue={editingEquipment.available}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <h2>Equipment List</h2>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Rental Price</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderEquipment()}</tbody>
      </table>
      {renderEditForm()}
    </div>
  );
};
