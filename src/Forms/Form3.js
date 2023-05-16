import { useState } from 'react';
import './forms.css';

export const Form3 = ({ onSubmit, onBack, initialData}) => {

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
        <h2>Form3</h2>
        <label>Enter your height:
          <input 
            type="number"
            name="Height"
            value={inputs.Height || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>Enter your weight:
          <input
            type="number"
            name="Weight"
            value={inputs.Weight || ""}
            onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      />
                      white
                  </label>
              </li>
          </ul>
        </label>
        <button onClick={handleBackClick}>Back</button>
        <input type="submit" value="Next" disabled={Object.values(inputs).some(value => value === "")} />
      </form>
    );
  }