import React from 'react';
import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const ContactForm = ({ onSubmit, initialData }) => {
  const { value, handleInputChange } = useFormInput(initialData);

  return (
    <form onSubmit={(e) => handleSubmit(e, value, onSubmit)}>
      <fieldset>
        <legend>Contact Form</legend>
        <label>
          Full name:
          <input
            type="text"
            name="fullName"
            value={value.fullName || ''}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="Email"
            value={value.Email || ''}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
          type="tel"
          name="phoneNumber"
          value={value.phoneNumber || ''}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          Subject:
          <input
          type="text"
          name="subject"
          value={value.subject || ''}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          Message:
          <textarea
          name="message"
          value={value.message || ''}
          onChange={handleInputChange}
          required
          />
        </label>
        <button type="submit">Next</button>
      </fieldset>
    </form>
  );
};
