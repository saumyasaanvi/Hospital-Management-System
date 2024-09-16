// EquipmentManagement.js
import React, { useState } from 'react';


const EquipmentManagement = () => {
  const [equipment, setEquipment] = useState([]);
  const [equipmentName, setEquipmentName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [costPerItem, setCostPerItem] = useState('');
  const [lastMaintenanceDate, setLastMaintenanceDate] = useState('');

  const addEquipment = () => {
    if (equipmentName && quantity && costPerItem && lastMaintenanceDate) {
      const newEquipment = {
        id: generateId(),
        equipmentName,
        quantity,
        costPerItem,
        totalCost: quantity * costPerItem,
        lastMaintenanceDate,
      };
      setEquipment([...equipment, newEquipment]);
      // Reset input fields after adding equipment
      setEquipmentName('');
      setQuantity('');
      setCostPerItem('');
      setLastMaintenanceDate('');
    }
  };

  const deleteEquipment = (id) => {
    const updatedEquipment = equipment.filter(item => item.id !== id);
    setEquipment(updatedEquipment);
  };

  const generateId = () => {
    // This is just a placeholder function, replace it with a proper ID generation logic
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="centered-container">
      <h2>Equipment Management</h2>
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Equipment Name"
          value={equipmentName}
          onChange={(e) => setEquipmentName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost Per Item"
          value={costPerItem}
          onChange={(e) => setCostPerItem(e.target.value)}
        />
        <input
          type="date"
          placeholder="Last Maintenance Date"
          value={lastMaintenanceDate}
          onChange={(e) => setLastMaintenanceDate(e.target.value)}
        />
        <button onClick={addEquipment}>Add Equipment</button>
      </div>
      <table className="centered-table">
        <thead>
          <tr>
            <th>Equipment ID</th>
            <th>Equipment Name</th>
            <th>Quantity</th>
            <th>Cost Per Item</th>
            <th>Total Cost</th>
            <th>Last Maintenance Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.equipmentName}</td>
              <td>{item.quantity}</td>
              <td>{item.costPerItem}</td>
              <td>{item.totalCost}</td>
              <td>{item.lastMaintenanceDate}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteEquipment(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentManagement;
