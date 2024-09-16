
import React, { useState } from 'react';
import './VendorManagement.css'; 

const VendorManagement = () => {
  const [vendors, setVendors] = useState([]);
  const [vendorName, setVendorName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('');
  const [contractExpiryDate, setContractExpiryDate] = useState('');

  const addVendor = () => {
    if (vendorName && contactPerson && contactEmail && contactPhone && paymentTerms && contractExpiryDate) {
      const newVendor = {
        id: generateId(),
        vendorName,
        contactPerson,
        contactEmail,
        contactPhone,
        paymentTerms,
        contractExpiryDate,
      };
      setVendors([...vendors, newVendor]);
      // Reset input fields after adding vendor
      setVendorName('');
      setContactPerson('');
      setContactEmail('');
      setContactPhone('');
      setPaymentTerms('');
      setContractExpiryDate('');
    }
  };

  const deleteVendor = (id) => {
    const updatedVendors = vendors.filter(vendor => vendor.id !== id);
    setVendors(updatedVendors);
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className="centered-container">
      <h2>Vendor Management</h2>
      <div className="add-item-form">
        <input
          type="text"
          placeholder="Vendor Name"
          value={vendorName}
          onChange={(e) => setVendorName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Person"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
        />
        <input
          type="email"
          placeholder="Contact Email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Contact Phone"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Payment Terms"
          value={paymentTerms}
          onChange={(e) => setPaymentTerms(e.target.value)}
        />
        <input
          type="date"
          placeholder="Contract Expiry Date"
          value={contractExpiryDate}
          onChange={(e) => setContractExpiryDate(e.target.value)}
        />
        <button onClick={addVendor}>Add Vendor</button>
      </div>
      <table className="centered-table">
        <thead>
          <tr>
            <th>Vendor ID</th>
            <th>Vendor Name</th>
            <th>Contact Person</th>
            <th>Contact Email</th>
            <th>Contact Phone</th>
            <th>Payment Terms</th>
            <th>Contract Expiry Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.id}</td>
              <td>{vendor.vendorName}</td>
              <td>{vendor.contactPerson}</td>
              <td>{vendor.contactEmail}</td>
              <td>{vendor.contactPhone}</td>
              <td>{vendor.paymentTerms}</td>
              <td>{vendor.contractExpiryDate}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteVendor(vendor.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorManagement;
