import { useFormInput, handleSubmit } from './FormUtils';
import './forms.css';

export const PaymentForm = ({ onSubmit, onBack, initialData }) => {
  const { value, handleInputChange, handleBackClick } = useFormInput(initialData);

  return (
    <form onSubmit={ (e) => handleSubmit (e, value, onSubmit)}>
      <fieldset>
        <legend>Payment form</legend>
        <div>
        <label htmlFor='pymntCardHolderName'>
          Cardholder Name:
        </label>
          <input
          id='pymntCardHolderName'
          type="text"
          name="cardholderName"
          value={value.cardholderName || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='pymntCardNumber'>
          Card Number:
        </label>
          <input
          id='pymntCardNumber'
          type="number"
          name="cardNumber"
          value={value.cardNumber || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='pymntExpDate'>
          Expiration Date:
        </label>
          <input
          id='pymntExpDate'
          type="month"
          name="expirationDate"
          value={value.expirationDate || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='pymntCvv'>
          CVV:
        </label>
          <input
          id='pymntCvv'
          type="text"
          name="cvv"
          value={value.cvv || ""}
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
