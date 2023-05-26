import React, { useState } from 'react';
import { EquipmentProvider } from './EquipmentContext';
import { EquipmentForm } from './EquipmentForm';
import { EquipmentList } from './EquipmentList';

const App = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [equipmentList, setEquipmentList] = useState([
    { id: 1, name: 'Equipment 1', description: 'Description 1', rentalPrice: 10.0, available: true },
    { id: 2, name: 'Equipment 2', description: 'Description 2', rentalPrice: 20.0, available: true },
    { id: 3, name: 'Equipment 3', description: 'Description 3', rentalPrice: 30.0, available: false },
  ]);

  const addEquipment = (equipment) => {
    setEquipmentList([...equipmentList, equipment]);
  };

  const editEquipment = (equipment) => {
    const index = equipmentList.findIndex((e) => e.id === equipment.id);
    const updatedList = [...equipmentList];
    updatedList[index] = equipment;
    setEquipmentList(updatedList);
    setSelectedEquipment(null);
  };

  const deleteEquipment = (equipment) => {
    const updatedList = equipmentList.filter((e) => e.id !== equipment.id);
    setEquipmentList(updatedList);
  };

  const handleEditEquipment = (equipment) => {
    setSelectedEquipment(equipment);
  };

  const handleCancelEdit = () => {
    setSelectedEquipment(null);
  };

  return (
    <EquipmentProvider value={{ equipmentList, addEquipment, editEquipment, deleteEquipment }}>
      <div>
        <EquipmentForm selectedEquipment={selectedEquipment} onCancelEdit={handleCancelEdit} />
        <EquipmentList onEditEquipment={handleEditEquipment} onDeleteEquipment={deleteEquipment} />
      </div>
    </EquipmentProvider>
  );
};

export default App;
