import { useState } from 'react';
import './forms.css';

export const Form5 = ({ onSubmit, onBack, initialData}) => {

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
                Form5
            </legend>
        <label>Enter your shoe size:
          <input 
            type="number"
            name="shoeSize"
            value={inputs.shoeSize || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>Enter your favorite color:
          <input
            type="text"
            name="favColor"
            value={inputs.favColor || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>Enter your favorite drink:
          <input
            type="text"
            name="favDrink"
            value={inputs.favDrink || ""}
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
  