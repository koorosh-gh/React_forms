import { useState } from 'react';
import './forms.css';

export const Form2 = ({ onSubmit, onBack, initialData }) => {

    const [inputs, setInputs] = useState(initialData);
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }));
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(inputs);
    };
    const handleBackClick = (event) => {
      event.preventDefault();
      onBack();
    }
    return (
      <form onSubmit={handleSubmit}>
        <h2>Form2</h2>
        <label>Enter your name:
          <input 
            type="text"
            name="Name"
            value={inputs.Name || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>Enter your surname:
          <input
            type="text"
            name="surName"
            value={inputs.surName || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>Enter your date of birth:
          <input
            type="date"
            name="birthDate" 
            value={inputs.birthDate || ""}
            onChange={handleChange}
            required
          />
        </label>
        <button onClick={handleBackClick}>Back</button>
        <input type="submit" value="Next" disabled={Object.values(inputs).some(value => value === "")} />
      </form>
    );
  }