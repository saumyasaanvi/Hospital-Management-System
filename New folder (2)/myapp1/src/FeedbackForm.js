import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS file for styling
const FeedbackForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    overallRating: '',
    resourcesRating: '',
    doctorReview: '',
    changesNeeded: '',
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit feedback data
    console.log('Feedback submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      overallRating: '',
      resourcesRating: '',
      doctorReview: '',
      changesNeeded: '',
    });
    // Display "saved successfully" prompt
    alert('Feedback saved successfully!');
  };

  return (
    <div className='body1'>
    <div className="feedback-form-container">
      <h2>Hospital Management System Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Feedback Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="overallRating">Overall Hospital Rating:</label>
          <select
            id="overallRating"
            name="overallRating"
            value={formData.overallRating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="resourcesRating">Rating of Hospital Resources:</label>
          <select
            id="resourcesRating"
            name="resourcesRating"
            value={formData.resourcesRating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="doctorReview">Doctor Review:</label>
          <textarea
            id="doctorReview"
            name="doctorReview"
            value={formData.doctorReview}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="changesNeeded">Changes Needed:</label>
          <textarea
            id="changesNeeded"
            name="changesNeeded"
            value={formData.changesNeeded}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
