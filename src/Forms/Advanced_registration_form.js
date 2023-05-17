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
                <div>
                <label htmlFor="advRegFirstName">
                    First Name:
                </label>
                    <input
                    id="advRegFirstName"
                    type="text"
                    name="firstName"
                    value={value.firstName || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                <label htmlFor="advRegLastName">
                    Last Name:
                </label>
                    <input
                    id="advRegLastName"
                    type="text"
                    name="lastName"
                    value={value.lastName || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                <label htmlFor="advRegEmail">
                    Email:
                </label>
                    <input
                    id="advRegEmail"
                    type="email"
                    name="email"
                    value={value.email || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                <label htmlFor="advRegPhone">
                    Phone Number:
                </label>
                    <input
                    id="advRegPhone"
                    type="tel"
                    name="phoneNumber"
                    value={value.phoneNumber || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                <label htmlFor="advRegAddress">
                    Address:
                </label>
                    <input
                    id="advRegAddress"
                    type="text"
                    name="address"
                    value={value.address || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                <label htmlFor="advRegCity">
                    City:
                </label>
                    <input
                    id="advRegCity"
                    type="text"
                    name="city"
                    value={value.city || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                <label htmlFor="advRegState">
                    State:
                </label>
                    <input
                    id="advRegState"
                    type="text"
                    name="state"
                    value={value.state || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                <label htmlFor="advRegZipCode">
                    Zip Code:
                </label>
                    <input
                    id="advRegZipCode"
                    type="number"
                    name="zipCode"
                    value={value.zipCode || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <div>
                <label htmlFor="advRegCountry">
                    Country:
                </label>
                    <input
                    id="advRegCountry"
                    type="text"
                    name="country"
                    value={value.country || ""}
                    onChange={handleInputChange}
                    required
                    />
                </div>
                <button onClick={(e) => handleBackClick(e, onBack)}>Back</button>
                <button type="submit">Next</button>
            </fieldset>
        </form>
    );
}