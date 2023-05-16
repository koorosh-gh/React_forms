import React from 'react';
import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const Form2 = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  return (
    <form onSubmit={(e) => handleSubmit(e, value, onSubmit)}>
      <fieldset>
        <legend>Form2</legend>
        <label>
          Enter your name:
          <input
            type="text"
            name="Name"
            value={value.Name || ''}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Enter your surname:
          <input
            type="text"
            name="surName"
            value={value.surName || ''}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Enter your date of birth:
          <input
            type="date"
            name="birthDate"
            value={value.birthDate || ''}
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
