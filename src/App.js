import React from 'react';
import { ReactDOM } from 'react';
import { useState } from 'react';
import { Form1, Form2, Form3, Form4, Form5 } from './forms';

function App() {
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData(prevData => [...prevData, data]);
    setCurrentForm(prevForm => prevForm + 1);
  };

  return (
    <div>
      {currentForm === 1 && (
        <Form1 onSubmit={handleFormSubmit} />
      )}
      {currentForm === 2 && (
        <Form2 onSubmit={handleFormSubmit} />
      )}
      {currentForm === 3 && (
        <Form3 onSubmit={handleFormSubmit} />
      )}
      {currentForm === 4 && (
        <Form4 onSubmit={handleFormSubmit} />
      )}
      {currentForm === 5 && (
        <Form5 onSubmit={handleFormSubmit} />
      )}

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
