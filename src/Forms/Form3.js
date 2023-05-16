import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const Form3 = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  const handleFormSubmit = (e) => {
    handleSubmit(e, value, onSubmit);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Form3</legend>
        <label>
          Enter your height:
          <input 
            type="number"
            name="Height"
            value={value.Height || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Enter your weight:
          <input
            type="number"
            name="Weight"
            value={value.Weight || ""}
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
                      checked={value.skin === "red"}
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
                      checked={value.skin === "blue"}
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
                      checked={value.skin === "green"}
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
                      checked={value.skin === "white"}
                      onChange={handleInputChange}
                      />
                      white
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
