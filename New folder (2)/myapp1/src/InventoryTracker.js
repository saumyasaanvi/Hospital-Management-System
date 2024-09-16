import React, { useState } from 'react';
import './InventoryTracker.css';

const InventoryTracker = () => {
  const [inventory, setInventory] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemCost, setItemCost] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle adding items to inventory
  const addItemToInventory = () => {
    if (itemName && itemQuantity && itemCost) {
      const newItem = {
        name: itemName,
        quantity: itemQuantity,
        cost: itemCost
      };
      setInventory([...inventory, newItem]);
      // Reset input fields after adding item
      setItemName('');
      setItemQuantity('');
      setItemCost('');
    }
  };

  return (
    <div className='centered-container'>
      <h2 className='title'>Inventory Tracker</h2>
      <form className="add-item-form">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost Per Item"
          value={itemCost}
          onChange={(e) => setItemCost(e.target.value)}
        />
        <button onClick={addItemToInventory} type="button">Add Item</button>
      </form>
      <caption>Items available:</caption>
      <table className="centered-table">
        
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Cost Per Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              {editIndex === index ? (
                <>
                  <td><input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      const updatedItem = { ...item, name: e.target.value };
                      const updatedInventory = [...inventory];
                      updatedInventory[index] = updatedItem;
                      setInventory(updatedInventory);
                    }}
                  /></td>
                  <td><input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const updatedItem = { ...item, quantity: e.target.value };
                      const updatedInventory = [...inventory];
                      updatedInventory[index] = updatedItem;
                      setInventory(updatedInventory);
                    }}
                  /></td>
                  <td><input
                    type="number"
                    value={item.cost}
                    onChange={(e) => {
                      const updatedItem = { ...item, cost: e.target.value };
                      const updatedInventory = [...inventory];
                      updatedInventory[index] = updatedItem;
                      setInventory(updatedInventory);
                    }}
                  /></td>
                  <td><button onClick={() => saveItem(index)}>Save</button></td>
                </>
              ) : (
                <>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.cost}</td>
                  <td>
                    <button onClick={() => editItem(index)}>Edit</button>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTracker;
