import React from 'react';
import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const ContactForm = ({ onSubmit, initialData }) => {
  const { value, handleInputChange } = useFormInput(initialData);

  return (
    <form onSubmit={(e) => handleSubmit(e, value, onSubmit)}>
      <fieldset>
        <legend>Contact Form</legend>
        <div>
        <label htmlFor='cntctFullName'>
          Full name:
        </label>
          <input
          id='cntctFullName'
          type="text"
          name="fullName"
          value={value.fullName || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='cntctEmail'>
          Email:
        </label>
          <input
          id='cntctEmail'
          type="email"
          name="email"
          value={value.email || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='cntctPhone'>
          Phone:
        </label>
          <input
          id='cntctPhone'
          type="tel"
          name="phoneNumber"
          value={value.phoneNumber || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='cntctSubject'>
          Subject:
        </label>
          <input
          id='cntctSubject'
          type="text"
          name="subject"
          value={value.subject || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='cntctMessage'>
          Message:
        </label>
          <textarea
          id='cntctMessage'
          name="message"
          value={value.message || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <button type="submit">Next</button>
      </fieldset>
    </form>
  );
};
