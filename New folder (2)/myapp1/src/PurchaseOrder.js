// PurchaseOrder.js
import React, { useState } from 'react';
import './PurchaseOrder.css'; // Import CSS file for styling

const PurchaseOrder = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [vendorName, setVendorName] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [status, setStatus] = useState('Pending'); // Default status

  const addPurchaseOrder = () => {
    if (vendorName && productName && quantity && unitPrice) {
      const totalPrice = quantity * unitPrice;
      const newPurchaseOrder = {
        id: generateId(),
        vendorName,
        productName,
        quantity,
        unitPrice,
        totalPrice,
        status
      };
      setPurchaseOrders([...purchaseOrders, newPurchaseOrder]);
      // Reset input fields after adding purchase order
      setVendorName('');
      setProductName('');
      setQuantity('');
      setUnitPrice('');
      setStatus('Pending');
    }
  };

  const deletePurchaseOrder = (id) => {
    const updatedPurchaseOrders = purchaseOrders.filter(order => order.id !== id);
    setPurchaseOrders(updatedPurchaseOrders);
  };

  const generateId = () => {
    // This is just a placeholder function, replace it with a proper ID generation logic
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="centered-container">
      <h2>Purchase Order Management</h2>
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Vendor Name"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Unit Price"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button onClick={addPurchaseOrder}>Add Purchase Order</button>
      </div>
      <table className="centered-table">
        <thead>
          <tr>
            <th>Purchase Order ID</th>
            <th>Vendor Name</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {purchaseOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.vendorName}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.unitPrice}</td>
              <td>{order.totalPrice}</td>
              <td>{order.status}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deletePurchaseOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseOrder;
