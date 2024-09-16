import React, { useState } from 'react';
import './PatientManagement.css'; // Import CSS file for styling

// Patient Information Form Component
const PatientInfoForm = () => {
    const [patientInfo, setPatientInfo] = useState({
        name: '',
        age: '',
        gender: '',
        medicalHistory: ''
    });
    const [submitted, setSubmitted] = useState(false); // State to track submission status

    const handleChange = (e) => {
        setPatientInfo({ ...patientInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend
        console.log('Submitted Patient Info:', patientInfo);

        // Simulating successful submission with a message
        setSubmitted(true);

        // Reset the form fields after submission (optional)
        setPatientInfo({
            name: '',
            age: '',
            gender: '',
            medicalHistory: ''
        });
    };

    return (
        <div className='body2'>
            <div className="patient-info-container">
                <h2>Patient Information Form</h2>
                {submitted && <p className="success-message">Submitted Successfully!</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={patientInfo.name}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={patientInfo.age}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <select name="gender" onChange={handleChange} value={patientInfo.gender} className="form-control">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Medical History:</label>
                        <textarea
                            name="medicalHistory"
                            placeholder="Medical History"
                            value={patientInfo.medicalHistory}
                            onChange={handleChange}
                            className="form-control"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

// Bed Management Component
const BedManagement = () => {
    // State to track bed occupancy
    const [occupiedBeds, setOccupiedBeds] = useState(0);
    const totalBeds = 50; // Total number of beds in the hospital

    // Function to assign a bed to a patient
    const assignBed = () => {
        if (occupiedBeds < totalBeds) {
            setOccupiedBeds(occupiedBeds + 1);
            // Additional logic to update bed status in backend
        } else {
            alert('No available beds.');
        }
    };

    return (
        <div className="bed-management-container">
            <h2>Bed Management</h2>
            <p>Occupied Beds: {occupiedBeds}</p>
            <p>Available Beds: {totalBeds - occupiedBeds}</p>
            <button onClick={assignBed} className="btn btn-primary">Assign Bed</button>
        </div>
    );
};

// Main Component
const PatientManagementModule = () => {
    return (
        <div>
            <PatientInfoForm />
            <div className="additional-info-container">
                <BedManagement />
            </div>
        </div>
    );
};

export default PatientManagementModule;
