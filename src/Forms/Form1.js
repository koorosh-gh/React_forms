import React, { useState } from 'react';
import './forms.css';

export const Form1 = ({ onSubmit, initialData }) => {
  const [inputs, setInputs] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Form 1</legend>
        <label>
          Username:
          <input type="text" name="Username" value={inputs.Username || ''} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="Email" value={inputs.Email || ''} onChange={handleInputChange} />
        </label>
        <button type="submit">Next</button>
      </fieldset>
    </form>
  );
};
