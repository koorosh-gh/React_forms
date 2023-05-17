import React, { useState } from 'react';
import { ContactForm } from './Forms/Contact_form';
import { SimpleRegistrationForm } from './Forms/Simple_registration_form';
import { AdvancedRegistrationForm } from './Forms/Advanced_registration_form';
import { PaymentForm } from './Forms/Payment_form';
import { FeedbackForm } from './Forms/Feedback_form';
import { JobApplicationForm } from './Forms/Job_application_form';

function App() {
  const [currentFormIndex, setCurrentFormIndex] = useState(1);
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    const isFormComplete = Object.values(data).every(value => value !== "");
    if (isFormComplete) {
      if (currentFormIndex <= formData.length) {
        setFormData((prevData) => {
          const newData = [...prevData];
          newData[currentFormIndex - 1] = data;
          return newData;
        });
      } else{
        setFormData((prevData) => [...prevData, data]);
      }
      setCurrentFormIndex(prevIndex => prevIndex + 1);
    } else {
      alert("Please fill out all the fields");
    }
  };

  const handleBack = () => {
    setCurrentFormIndex(prevIndex => prevIndex - 1);
  };

  const renderForm = () => {
    const initialData = formData[currentFormIndex - 1] || {};
    switch (currentFormIndex) {
      case 1:
        return <ContactForm onSubmit={handleFormSubmit} initialData={initialData}/>;
      case 2:
        return <SimpleRegistrationForm onSubmit={handleFormSubmit} onBack={handleBack} initialData={initialData}/>;
      case 3:
        return <AdvancedRegistrationForm onSubmit={handleFormSubmit} onBack={handleBack} initialData={initialData}/>;
      case 4:
        return <PaymentForm onSubmit={handleFormSubmit} onBack={handleBack} initialData={initialData}/>;
      case 5:
        return <FeedbackForm onSubmit={handleFormSubmit} onBack={handleBack} initialData={initialData}/>;
      case 6:
        return <JobApplicationForm onSubmit={handleFormSubmit} onBack={handleBack} initialData={initialData}/>;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderForm()}
      <h3>Form Data:</h3>
      <ul>
        {formData.map((data, index) => (
          <li key={index}>{`Form ${index + 1}: ${JSON.stringify(data)}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
