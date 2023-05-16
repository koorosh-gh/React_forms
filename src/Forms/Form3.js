import { useState } from 'react';
import './forms.css';

export const Form3 = ({ onSubmit, onBack, initialData}) => {

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
        Form3
        </legend>
        <label>Enter your height:
          <input 
            type="number"
            name="Height"
            value={inputs.Height || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>Enter your weight:
          <input
            type="number"
            name="Weight"
            value={inputs.Weight || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>Enter your color skin:
          <ul>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="skin"
                      value="red"
                      checked={inputs.skin === "red"}
                      onChange={handleInputChange}
                      />
                      red
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="skin"
                      value="blue"
                      checked={inputs.skin === "blue"}
                      onChange={handleInputChange}
                      />
                      blue
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="skin"
                      value="green"
                      checked={inputs.skin === "green"}
                      onChange={handleInputChange}
                      />
                      green
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="skin"
                      value="white"
                      checked={inputs.skin === "white"}
                      onChange={handleInputChange}
                      />
                      white
                  </label>
              </li>
          </ul>
        </label>
        <button onClick={handleBackClick}>Back</button>
        <button type="submit">Next</button>
        </fieldset>
      </form>
    );
  }