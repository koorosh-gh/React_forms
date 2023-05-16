import { useState } from 'react';

export const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleBackClick = (e, onBack) => {
    e.preventDefault();
    onBack();
  };

  return { value, handleInputChange, handleBackClick };
};

export const handleSubmit = (e, data, onSubmit) => {
  e.preventDefault();
  onSubmit(data);
};
