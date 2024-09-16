import React, { useState } from 'react';
import './clinical.css';

const FormSection = ({ title, formFields }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <section className={`form-section ${isOpen ? 'open' : 'closed'}`}>
            <div className="section-header" onClick={toggleOpen}>
                <h2 className="section-title">
                    {title}
                    <span className={`dropdown-icon ${isOpen ? 'open' : 'closed'}`}>
                        {isOpen ? '▲' : '▼'}
                    </span>
                </h2>
            </div>
            {isOpen && (
                <div className="form-content">
                    {formFields.map((field, index) => (
                        <div key={index} className="form-field">
                            <label htmlFor={field.name}>{field.label}:</label>
                            {field.type === 'textarea' ? (
                                <textarea id={field.name} name={field.name} required />
                            ) : (
                                <input type={field.type} id={field.name} name={field.name} required />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default FormSection;
