import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const PaymentForm = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  const handleFormSubmit = (e) => {
    handleSubmit(e, value, onSubmit);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Payment form</legend>
        <label>
          Cardholder Name:
          <input
          type="text"
          name="cardholderName"
          value={value.cardholderName || ""}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          Card Number:
          <input
          type="text"
          name="cardNumber"
          value={value.cardNumber || ""}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          Expiration Month:
          <input
          type="text"
          name="expirationMonth"
          value={value.expirationMonth || ""}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          Expiration Year:
          <input
          type="text"
          name="expirationYear"
          value={value.expirationYear || ""}
          onChange={handleInputChange}
          required
          />
        </label>
        <label>
          CVV:
          <input
          type="text"
          name="cvv"
          value={value.cvv || ""}
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
