import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const Form4 = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  const handleFormSubmit = (e) => {
    handleSubmit(e, value, onSubmit);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Form4</legend>
        <label>
          Enter your eye color:
          <input 
            type="text"
            name="eyeColor"
            value={value.eyeColor || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Enter your hair color:
          <input
            type="text"
            name="hairColor"
            value={value.hairColor || ""}
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
                  checked={value.bloodType === "Apos"}
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
                  checked={value.bloodType === "Amin"}
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
                  checked={value.bloodType === "Bpos"}
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
                  checked={value.bloodType === "Bmin"}
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
                  checked={value.bloodType === "Opos"}
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
                  checked={value.bloodType === "Omin"}
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
                  checked={value.bloodType === "ABmin"}
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
                  checked={value.bloodType === "ABpos"}
                  onChange={handleInputChange}
                />
                AB+
              </label>
            </li>
          </ul>
        </label>
        <button onClick={(e) => handleBackClick(e, onBack)}>Back</button>
        <button type="submit">Next</button>
     </fieldset>
    </form>
);
};