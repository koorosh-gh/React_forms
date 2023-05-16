import React, { useState } from 'react';
import { Form1, Form2, Form3, Form4, Form5 } from './forms';

function App() {
  const [currentFormIndex, setCurrentFormIndex] = useState(1);
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    const isFormComplete = Object.values(data).every(value => value !== "");
    if (isFormComplete) {
      setFormData(prevData => [...prevData, data]);
      setCurrentFormIndex(prevIndex => prevIndex + 1);
    } else {
      alert("Please fill out all the fields");
    }
  };

  const handleBack = () => {
    setCurrentFormIndex(prevIndex => prevIndex - 1);
  };

  const renderForm = () => {
    switch (currentFormIndex) {
      case 1:
        return <Form1 onSubmit={handleFormSubmit} />;
      case 2:
        return <Form2 onSubmit={handleFormSubmit} onBack={handleBack} />;
      case 3:
        return <Form3 onSubmit={handleFormSubmit} onBack={handleBack} />;
      case 4:
        return <Form4 onSubmit={handleFormSubmit} onBack={handleBack} />;
      case 5:
        return <Form5 onSubmit={handleFormSubmit} onBack={handleBack} />;
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
