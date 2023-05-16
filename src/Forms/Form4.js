import { useState } from 'react';
import './forms.css';

export const Form4 = ({ onSubmit, onBack, initialData }) => {

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
        <h2>Form4</h2>
        <label>Enter your eye color:
          <input 
            type="text"
            name="eyeColor"
            value={inputs.eyeColor || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>Enter your hair color:
          <input
            type="text"
            name="hairColor"
            value={inputs.hairColor || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>Enter your blood type:
          <ul>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="bloodType"
                      value="Apos"
                      checked={inputs.bloodType === "Apos"}
                      onChange={handleChange}
                      />
                      A+
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="bloodType"
                      value="Amin"
                      checked={inputs.bloodType === "Amin"}
                      onChange={handleChange}
                      />
                      A-
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="bloodType"
                      value="Bpos"
                      checked={inputs.bloodType === "Bpos"}
                      onChange={handleChange}
                      />
                      B+
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="bloodType"
                      value="Bmin"
                      checked={inputs.bloodType === "Bmin"}
                      onChange={handleChange}
                      />
                      B-
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="bloodType"
                      value="Opos"
                      checked={inputs.bloodType === "Opos"}
                      onChange={handleChange}
                      />
                      O+
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="bloodType"
                      value="Omin"
                      checked={inputs.bloodType === "Omin"}
                      onChange={handleChange}
                      />
                      O-
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="bloodType"
                      value="ABmin"
                      checked={inputs.bloodType === "ABmin"}
                      onChange={handleChange}
                      />
                      AB-
                  </label>
              </li>
              <li>
                  <label>
                      <input
                      type="radio"
                      name="bloodType"
                      value="ABpos"
                      checked={inputs.bloodType === "ABpos"}
                      onChange={handleChange}
                      />
                      AB+
                  </label>
              </li>
          </ul>
        </label>
        <button onClick={handleBackClick}>Back</button>
        <input type="submit" value="Next" disabled={Object.values(inputs).some(value => value === "")} />
      </form>
    );
  }