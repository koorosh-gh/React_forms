import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const FeedbackForm = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  const handleFormSubmit = (e) => {
    handleSubmit(e, value, onSubmit);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Feedback Form</legend>
        <label>
          <span>Name:</span>
          <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
          type="text"
          name="email"
          value={value.email}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          <span>Rating:</span>
          <input
          type="text"
          name="rating"
          value={value.rating}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          <span>Comments:</span>
          <textarea
          name="comments"
          value={value.comments}
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