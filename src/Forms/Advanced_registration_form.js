import React from "react";
import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const AdvancedRegistrationForm = ({ onSubmit, onBack, initialData }) => {
    const { value, handleInputChange, handleBackClick } = useFormInput (initialData);

    return (
        <form onSubmit={ (e) => handleSubmit (e, value, onSubmit)}>
            <fieldset>
                <legend>
                    Advanced Registration Form
                </legend>
                <label>
                    First Name:
                    <input
                    type="text"
                    name="firstName"
                    value={value.firstName || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                    type="text"
                    name="lastName"
                    value={value.lastName || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={value.email || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                    type="tel"
                    name="phoneNumber"
                    value={value.phoneNumber || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <label>
                    Address:
                    <input
                    type="text"
                    name="address"
                    value={value.address || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <label>
                    City:
                    <input
                    type="text"
                    name="city"
                    value={value.city || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <label>
                    State:
                    <input
                    type="text"
                    name="state"
                    value={value.state || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <label>
                    Zip Code:
                    <input
                    type="text"
                    name="zipCode"
                    value={value.zipCode || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <label>
                    Country:
                    <input
                    type="text"
                    name="country"
                    value={value.country || ""}
                    onChange={handleInputChange}
                    required
                    />
                </label>
                <button onClick={(e) => handleBackClick(e, onBack)}>Back</button>
                <button type="submit">Next</button>
            </fieldset>
        </form>
    );
}