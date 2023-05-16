import { useState } from 'react';
import './forms.css';

export const Form2 = ({ onSubmit, onBack, initialData }) => {

    const [inputs, setInputs] = useState(initialData);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputs);
      };
    const handleBackClick = (e) => {
      e.preventDefault();
      onBack();
    }
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>
            Form2
        </legend>
        <label>Enter your name:
          <input 
            type="text"
            name="Name"
            value={inputs.Name || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>Enter your surname:
          <input
            type="text"
            name="surName"
            value={inputs.surName || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>Enter your date of birth:
          <input
            type="date"
            name="birthDate" 
            value={inputs.birthDate || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <button onClick={handleBackClick}>Back</button>
        <button type="submit">Next</button>
        </fieldset>
      </form>
    );
  }