import React, { useState } from 'react';

export const EquipmentContext = React.createContext();

export const EquipmentProvider = (props) => {
  const [equipment, setEquipment] = useState([
    {
      id: 1,
      name: 'Excavator',
      description: 'Heavy duty excavator',
      price: 200,
      available: true,
    },
    {
      id: 2,
      name: 'Backhoe Loader',
      description: 'Backhoe loader with digging and loading capacity',
      price: 150,
      available: true,
    },
    {
      id: 3,
      name: 'Bulldozer',
      description: 'Powerful bulldozer with blade for pushing materials',
      price: 250,
      available: false,
    },
  ]);

  const addEquipment = (newEquipment) => {
    setEquipment([...equipment, newEquipment]);
  };

  const deleteEquipment = (id) => {
    const updatedEquipment = equipment.filter((item) => item.id !== id);
    setEquipment(updatedEquipment);
  };

  const editEquipment = (id, updatedEquipment) => {
    const updatedList = equipment.map((item) => {
      if (item.id === id) {
        return { ...item, ...updatedEquipment };
      }
      return item;
    });
    setEquipment(updatedList);
  };

  return (
    <EquipmentContext.Provider
      value={{ equipment, addEquipment, deleteEquipment, editEquipment }}
    >
      {props.children}
    </EquipmentContext.Provider>
  );
};
