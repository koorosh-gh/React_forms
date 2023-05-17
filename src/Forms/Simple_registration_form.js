import React from 'react';
import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const SimpleRegistrationForm = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  return (
    <form onSubmit={(e) => handleSubmit(e, value, onSubmit)}>
      <fieldset>
        <legend>Simple registration form</legend>
        <div>
        <label htmlFor='smpRegUserName'>
          Username:
        </label>
          <input
          id='smpRegUserName'
          type="text"
          name="username"
          value={value.username || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='smpRegEmail'>
          Email:
        </label>
          <input
          id='smpRegEmail'
          type="email"
          name="email"
          value={value.email || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='smpRegPassword'>
          Password:
        </label>
          <input
          id='smpRegPassword'
          type="password"
          name="password"
          minLength="8"
          value={value.password || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='smpRegConfirmPassword'>
          Confirm password:
        </label>
          <input
          id='smpRegConfirmPassword'
          type="password"
          name="confirmPassword"
          minLength="8"
          value={value.confirmPassword || ''}
          onChange={handleInputChange}
          required
          />
        </div>
        <button onClick={(e) => handleBackClick(e, onBack)}>Back</button>
        <button type="submit">Next</button>
      </fieldset>
    </form>
  );
};
