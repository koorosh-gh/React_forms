import { useState } from 'react';
import './forms.css';

export const Form5 = ({ onSubmit, onBack, initialData}) => {

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
        <h2>Form5</h2>
        <label>Enter your shoe size:
          <input 
            type="number"
            name="shoeSize"
            value={inputs.shoeSize || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>Enter your favorite color:
          <input
            type="text"
            name="favColor"
            value={inputs.favColor || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>Enter your favorite drink:
          <input
            type="text"
            name="favDrink"
            value={inputs.favDrink || ""}
            onChange={handleChange}
            required
          />
        </label>
        <button onClick={handleBackClick}>Back</button>
        <input type="submit" value="Next" disabled={Object.values(inputs).some(value => value === "")} />
      </form>
    );
  }
  