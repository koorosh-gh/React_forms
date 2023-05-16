import React from 'react';
import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const Form1 = ({ onSubmit, initialData }) => {
  const { value, handleInputChange } = useFormInput(initialData);

  return (
    <form onSubmit={(e) => handleSubmit(e, value, onSubmit)}>
      <fieldset>
        <legend>Form 1</legend>
        <label>
          Username:
          <input
            type="text"
            name="Username"
            value={value.Username || ''}
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
        <button type="submit">Next</button>
      </fieldset>
    </form>
  );
};
