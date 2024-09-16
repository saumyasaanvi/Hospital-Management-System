import React, { useState } from 'react';
import FormSection from './FormSection';
import './clinical.css';

const ClinicalModule = () => {
    // State to store EHR patient records
    const [patientRecords, setPatientRecords] = useState([]);

    // State for the search query and filtered records
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecords, setFilteredRecords] = useState([]);

    // Define form fields for the EHR section
    const ehrFormFields = [
        { name: 'patientName', label: 'Patient Name', type: 'text' },
        { name: 'medicalHistory', label: 'Medical History', type: 'textarea' },
    ];

    // Define form fields for Nursing Notes and Care Plans section
    const nursingNotesFormFields = [
        { name: 'nurseName', label: 'Nurse Name', type: 'text' },
        { name: 'carePlan', label: 'Care Plan', type: 'textarea' },
    ];

    // Define form fields for Physician Orders and Progress Notes section
    const physicianOrdersFormFields = [
        { name: 'physicianName', label: 'Physician Name', type: 'text' },
        { name: 'progressNotes', label: 'Progress Notes', type: 'textarea' },
    ];

    // Define form fields for Diagnostic Test Ordering and Results Tracking section
    const diagnosticTestsFormFields = [
        { name: 'testType', label: 'Test Type', type: 'text' },
        { name: 'testResults', label: 'Test Results', type: 'textarea' },
    ];

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Retrieve form data from the event target
        const formData = new FormData(e.target);

        // Retrieve data from each section
        const patientName = formData.get('patientName');
        const medicalHistory = formData.get('medicalHistory');
        const carePlan = formData.get('carePlan');
        const progressNotes = formData.get('progressNotes');

        // Create a new patient record
        const newRecord = {
            patientName,
            medicalHistory,
            carePlan,
            progressNotes,
        };

        // Update the state with the new record
        setPatientRecords((prevRecords) => [...prevRecords, newRecord]);

        // Update filtered records
        setFilteredRecords((prevRecords) => [...prevRecords, newRecord]);

        // Reset the form after submission
        e.target.reset();
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter patient records based on the search query
        const filtered = patientRecords.filter((record) =>
            record.patientName.toLowerCase().includes(query)
        );

        // Update filtered records
        setFilteredRecords(filtered);
    };

    return (
        <div className="container">
            <h1>Clinical Module</h1>

            {/* Search bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by patient name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ width: '70%' }} // Adjust width as needed
                />
            </div>

            {/* All form sections wrapped in a single form */}
            <form onSubmit={handleFormSubmit}>
                {/* EHR Form Section */}
                <FormSection
                    title="Electronic Health Records (EHR)"
                    formId="ehrForm"
                    formFields={ehrFormFields}
                />

                {/* Nursing Notes and Care Plans Form Section */}
                <FormSection
                    title="Nursing Notes and Care Plans"
                    formFields={nursingNotesFormFields}
                    formId="nursingNotesForm"
                />

                {/* Physician Orders and Progress Notes Form Section */}
                <FormSection
                    title="Physician Orders and Progress Notes"
                    formFields={physicianOrdersFormFields}
                    formId="physicianOrdersForm"
                />

                {/* Diagnostic Test Ordering and Results Tracking Form Section */}
                <FormSection
                    title="Diagnostic Test Ordering and Results Tracking"
                    formFields={diagnosticTestsFormFields}
                    formId="diagnosticTestsForm"
                />

                {/* Submit button at the end */}
                <div style={{ marginTop: '20px' }}>
                    <button type="submit">Submit</button>
                </div>
            </form>

            {/* Display the table of patient records */}
            <div className="patient-records-table">
                <h3>Patient Records</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th style={{ paddingLeft: '30px' }}>Medical History</th>
                            <th style={{ paddingLeft: '30px' }}>Care Plans</th>
                            <th style={{ paddingLeft: '30px' }}>Progress Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecords.map((record, index) => (
                            <tr key={index}>
                                <td>{record.patientName}</td>
                                <td style={{ paddingLeft: '30px' }}>{record.medicalHistory}</td>
                                <td style={{ paddingLeft: '30px' }}>{record.carePlan}</td>
                                <td style={{ paddingLeft: '30px' }}>{record.progressNotes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClinicalModule;
