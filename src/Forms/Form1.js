import { useState } from 'react';
import './forms.css';

export const Form1 = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form1</h2>
      <label>Enter your username:
        <input
          type="text"
          name="userName"
          value={inputs.userName || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label>Enter your email:
        <input
          type="email"
          name="Email"
          value={inputs.Email || ""}
          onChange={handleChange}
          required
        />
      </label>
      <input type="submit" value="Next" disabled={Object.values(inputs).some(value => value === "")} />
    </form>
  );
}