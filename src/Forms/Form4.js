import { useState } from 'react';
import './forms.css';

export const Form4 = ({ onSubmit, onBack, initialData }) => {

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
            Form4
        </legend>
        <label>Enter your eye color:
          <input 
            type="text"
            name="eyeColor"
            value={inputs.eyeColor || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>Enter your hair color:
          <input
            type="text"
            name="hairColor"
            value={inputs.hairColor || ""}
            onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      />
                      AB+
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