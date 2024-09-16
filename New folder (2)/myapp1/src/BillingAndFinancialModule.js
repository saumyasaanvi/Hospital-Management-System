import React, { useState } from 'react';
import './Billing.css'; // Import the CSS file

const BillingAndFinancialModule = () => {
    // Define available tests with associated costs in Indian Rupees
    const tests = [
        { name: 'Blood Test', cost: 50 },
        { name: 'X-Ray', cost: 80 },
        { name: 'MRI', cost: 200 },
        { name: 'CT Scan', cost: 150 },
        { name: 'Urine Test', cost: 30 },
        { name: 'EKG', cost: 60 },
        // Add more tests as needed with associated costs in Indian Rupees
    ];

    // Discount rate for medical insurance
    const DISCOUNT_RATE = 0.2; // 20% discount rate (change as needed)

    // GST rate
    const GST_RATE = 0.18; // 18% GST rate

    // State for form data
    const [formData, setFormData] = useState({
        patientName: '',
        tests: [],
        hasInsurance: false,
        insuranceClaimNumber: '',
    });

    // State to store billing records
    const [billingRecords, setBillingRecords] = useState([]);

    // Handle form changes
    const handleChange = (event) => {
        const { name, value, checked } = event.target;

        // Update the state based on the form fields
        if (name === 'tests') {
            // Handle test checkboxes
            const testValue = value;
            if (checked) {
                // Add the test to the list if checked
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    tests: [...prevFormData.tests, testValue],
                }));
            } else {
                // Remove the test from the list if unchecked
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    tests: prevFormData.tests.filter((test) => test !== testValue),
                }));
            }
        } else if (name === 'hasInsurance') {
            // Update insurance state
            setFormData((prevFormData) => ({
                ...prevFormData,
                hasInsurance: checked,
                // Reset insurance claim number if insurance is unchecked
                insuranceClaimNumber: checked ? prevFormData.insuranceClaimNumber : '',
            }));
        } else {
            // Update other form fields
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    // Calculate total bill amount
    const calculateTotalBillAmount = () => {
        // Calculate the total cost of selected tests
        const totalCost = formData.tests.reduce((total, testName) => {
            const test = tests.find((t) => t.name === testName);
            return total + (test ? test.cost : 0);
        }, 0);

        // Calculate discount if the patient has medical insurance
        const discount = formData.hasInsurance ? totalCost * DISCOUNT_RATE : 0;
        // Calculate the total cost after applying the discount
        const totalAfterDiscount = totalCost - discount;

        // Calculate GST on the discounted cost
        const gstAmount = totalAfterDiscount * GST_RATE;

        // Calculate the final total bill amount including GST
        return totalAfterDiscount + gstAmount;
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Calculate the total bill amount
        const totalBillAmount = calculateTotalBillAmount();

        // Calculate the cost after discount
        const costAfterDiscount = formData.hasInsurance
            ? totalBillAmount - (totalBillAmount * DISCOUNT_RATE)
            : 'Not applicable';

        // Create a new billing record for the patient
        const newBillingRecord = {
            patientName: formData.patientName,
            tests: formData.tests.join(', '),
            totalBillAmount: totalBillAmount.toFixed(2),
            costAfterDiscount: formData.hasInsurance ? `₹${costAfterDiscount.toFixed(2)}` : 'Not applicable',
        };

        // Add the new billing record to the list of billing records
        setBillingRecords((prevRecords) => [...prevRecords, newBillingRecord]);

        // Reset form data
        setFormData({
            patientName: '',
            tests: [],
            hasInsurance: false,
            insuranceClaimNumber: '',
        });
    };

    return (
        <div className="billing-and-financial">
            <h1>Billing and Financial Module</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="patientName">Patient Name:</label>
                    <input
                        type="text"
                        id="patientName"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Section for the tests the patient went through */}
                <div className="form-field">
                    <label>Tests the patient went through:</label>
                    {tests.map((test, index) => (
                        <div key={index} className="checkbox-field">
                            <input
                                type="checkbox"
                                id={test.name}
                                name="tests"
                                value={test.name}
                                checked={formData.tests.includes(test.name)}
                                onChange={handleChange}
                            />
                            <label htmlFor={test.name}>
                                {test.name} - ₹{test.cost}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Checkbox for medical insurance */}
                <div className="form-field">
                    <input
                        type="checkbox"
                        id="hasInsurance"
                        name="hasInsurance"
                        checked={formData.hasInsurance}
                        onChange={handleChange}
                    />
                    <label htmlFor="hasInsurance">Do you have medical insurance?</label>
                </div>

                {/* Render insurance claim number field if insurance is checked */}
                {formData.hasInsurance && (
                    <div className="form-field">
                        <label htmlFor="insuranceClaimNumber">Insurance Claim Number:</label>
                        <input
                            type="text"
                            id="insuranceClaimNumber"
                            name="insuranceClaimNumber"
                            value={formData.insuranceClaimNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <button type="submit">Submit</button>
            </form>

            {/* Display billing records */}
            {billingRecords.length > 0 && (
                <div className="billing-records-table">
                    <h2>Billing Records</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Tests</th>
                                <th style={{ paddingLeft: '30px' }}>Total Bill Amount (₹)</th>
                                <th style={{ paddingLeft: '30px' }}>Cost After Discount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {billingRecords.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.patientName}</td>
                                    <td>{record.tests}</td>
                                    <td style={{ paddingLeft: '30px' }}>₹{record.totalBillAmount}</td>
                                    <td style={{ paddingLeft: '30px' }}>{record.costAfterDiscount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BillingAndFinancialModule;
