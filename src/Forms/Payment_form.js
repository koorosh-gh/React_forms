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
          type="text"
          name="cardNumber"
          value={value.cardNumber || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='pymntExpMonth'>
          Expiration Month:
        </label>
          <input
          id='pymntExpMonth'
          type="text"
          name="expirationMonth"
          value={value.expirationMonth || ""}
          onChange={handleInputChange}
          required
          />
        </div>
        <div>
        <label htmlFor='pymntExpYear'>
          Expiration Year:
        </label>
          <input
          id='pymntExpYear'
          type="text"
          name="expirationYear"
          value={value.expirationYear || ""}
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
