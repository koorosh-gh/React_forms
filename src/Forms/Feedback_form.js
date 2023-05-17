import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const FeedbackForm = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  return (
    <form onSubmit={ (e) => handleSubmit (e, value, onSubmit)}>
      <fieldset>
        <legend>Feedback Form</legend>
        <div>
        <label htmlFor='fdbckName'>
          Name:
        </label>
          <input
          id='fdbckName'
          type="text"
          name="name"
          value={value.name}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='fdbckEmail'>
          Email:
        </label>
          <input
          id='fdbckEmail'
          type="text"
          name="email"
          value={value.email}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='fdbckRating'>
          Rating:
        </label>
          <input
          id='fdbckRating'
          type="text"
          name="rating"
          value={value.rating}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='fdbckComment'>
          Comments:
        </label>
          <textarea
          id='fdbckComment'
          name="comments"
          value={value.comments}
          onChange={handleInputChange}
          required
          />
        </div>
        <button onClick={(e) => handleBackClick(e, onBack)}>Back</button>
        <button type="submit">Next</button>
     </fieldset>
    </form>
);
};