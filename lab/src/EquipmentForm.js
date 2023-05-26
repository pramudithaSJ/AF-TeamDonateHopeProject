import React, { useContext, useState } from 'react';
import { EquipmentContext } from './EquipmentContext';

export const EquipmentForm = () => {
  const { addEquipment } = useContext(EquipmentContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEquipment = { name, description, price, availability };
    addEquipment(newEquipment);
    setName('');
    setDescription('');
    setPrice(0);
    setAvailability(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" style={{display:"inherit",border:"1px solid red",margin:"5px"}} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" style={{display:"inherit",border:"1px solid red",margin:"5px"}} placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" style={{display:"inherit",border:"1px solid red",margin:"5px"}} placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label style={{display:"inherit",border:"1px solid red",margin:"5px"}}>
        <input type="checkbox" checked={availability} onChange={(e) => setAvailability(e.target.checked)} />
        Available
      </label>
      <button type="submit" style={{background:"red",marginBottom:"20px"}}>Add Equipment</button><br/>
    </form>
  );
};
