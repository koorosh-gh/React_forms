import React from 'react';
import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const SimpleRegistrationForm = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  return (
    <form onSubmit={(e) => handleSubmit(e, value, onSubmit)}>
      <fieldset>
        <legend>Simple registration form</legend>
        <label>
          Username:
          <input
          type="text"
          name="username"
          value={value.username || ''}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          Email:
          <input
          type="email"
          name="email"
          value={value.email || ''}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          Password:
          <input
          type="password"
          name="password"
          value={value.password || ''}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          Confirm password:
          <input
          type="password"
          name="confirmPassword"
          value={value.confirmPassword || ''}
          onChange={handleInputChange}
          required
          />
        </label>
        <button onClick={(e) => handleBackClick(e, onBack)}>Back</button>
        <button type="submit">Next</button>
      </fieldset>
    </form>
  );
};
