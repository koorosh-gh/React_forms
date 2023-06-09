import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const JobApplicationForm = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  return (
    <form onSubmit={ (e) => handleSubmit (e, value, onSubmit)}>
      <fieldset>
        <legend>
          Job Application Form
        </legend>
        <div>
          <label htmlFor="jobAppFullName">
            Full Name:
          </label>
          <input
          id="jobAppFullName"
          name="fullName"
          type="text"
          value={value.fullName || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
          <label htmlFor="jobAppEmail">Email:</label>
          <input
          id="jobAppEmail"
          name="email"
          type="email"
          value={value.email || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
          <label htmlFor="jobAppPhone">Phone Number:</label>
          <input
          id="jobAppPhone"
          name="phoneNumber"
          type="tel"
          value={value.phoneNumber || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
          <label htmlFor="jobAppCVResume">Resume/Cv:</label>
          <input
          id="jobAppCVResume"
          name="cv"
          type="file"
          accept=".pdf"
          value={value.cv || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
          <label htmlFor="jobAppDescription">Description:</label>
          <textarea
          id="jobAppDescription"
          name="description"
          value={value.description || ""}
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
