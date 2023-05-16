import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const Form5 = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  const handleFormSubmit = (e) => {
    handleSubmit(e, value, onSubmit);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Form5</legend>
        <label>
          Enter your shoe size:
          <input 
            type="number"
            name="shoeSize"
            value={value.shoeSize || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Enter your favorite color:
          <input
            type="text"
            name="favColor"
            value={value.favColor || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Enter your favorite drink:
          <input
            type="text"
            name="favDrink"
            value={value.favDrink || ""}
            onChange={handleInputChange}
            required
          />
        </label>
        <button onClick={(e) => handleBackClick(e, onBack)}>Back</button>
        <button type="submit">Next</button>
      </fieldset>
    </form>
  );
};
