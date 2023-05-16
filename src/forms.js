import { useState } from 'react';
import './forms.css';
export const Form1 = ({ onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form1</h2>
      <label>Enter your username:
        <input
          type="text"
          name="userName"
          value={inputs.userName || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your email:
        <input
          type="email"
          name="Email"
          value={inputs.Email || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="next"/>
    </form>
  );
}
export const Form2 = ({ onSubmit }) => {

  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form2</h2>
      <label>Enter your name:
        <input 
          type="text"
          name="Name"
          value={inputs.Name || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your surname:
        <input
          type="text"
          name="surName"
          value={inputs.surName || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your date of birth:
        <input
          type="date"
          name="birthDate" 
          value={inputs.birthDate || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="next"/>
    </form>
  );
}
export const Form3 = ({ onSubmit }) => {

  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form3</h2>
      <label>Enter your height:
        <input 
          type="text"
          name="Height"
          value={inputs.Height || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your weight:
        <input
          type="text"
          name="Weight"
          value={inputs.Weight || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your color skin:
        <ul>
            <li>
                <label>
                    <input
                    type="radio"
                    name="skin"
                    value="red"
                    checked={inputs.skin === "red"}
                    onChange={handleChange}
                    />
                    red
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="skin"
                    value="blue"
                    checked={inputs.skin === "blue"}
                    onChange={handleChange}
                    />
                    blue
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="skin"
                    value="green"
                    checked={inputs.skin === "green"}
                    onChange={handleChange}
                    />
                    green
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="skin"
                    value="white"
                    checked={inputs.skin === "white"}
                    onChange={handleChange}
                    />
                    white
                </label>
            </li>
        </ul>
      </label>
      <input type="submit" value="Next"/>
    </form>
  );
}
export const Form4 = ({ onSubmit }) => {

  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form4</h2>
      <label>Enter your eye color:
        <input 
          type="text"
          name="eyeColor"
          value={inputs.eyeColor || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your hair color:
        <input
          type="text"
          name="hairColor"
          value={inputs.hairColor || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your blood type:
        <ul>
            <li>
                <label>
                    <input
                    type="radio"
                    name="bloodType"
                    value="Apos"
                    checked={inputs.skin === "Apos"}
                    onChange={handleChange}
                    />
                    A+
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="bloodType"
                    value="Amin"
                    checked={inputs.skin === "Amin"}
                    onChange={handleChange}
                    />
                    A-
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="bloodType"
                    value="Bpos"
                    checked={inputs.skin === "Bpos"}
                    onChange={handleChange}
                    />
                    B+
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="bloodType"
                    value="Bmin"
                    checked={inputs.skin === "Bmin"}
                    onChange={handleChange}
                    />
                    B-
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="bloodType"
                    value="Opos"
                    checked={inputs.skin === "Opos"}
                    onChange={handleChange}
                    />
                    O+
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="bloodType"
                    value="Omin"
                    checked={inputs.skin === "Omin"}
                    onChange={handleChange}
                    />
                    O-
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="bloodType"
                    value="ABmin"
                    checked={inputs.skin === "ABmin"}
                    onChange={handleChange}
                    />
                    AB-
                </label>
            </li>
            <li>
                <label>
                    <input
                    type="radio"
                    name="bloodType"
                    value="ABpos"
                    checked={inputs.skin === "ABpos"}
                    onChange={handleChange}
                    />
                    AB+
                </label>
            </li>
        </ul>
      </label>
      <input type="submit" value="Next"/>
    </form>
  );
}
export const Form5 = ({ onSubmit }) => {

  const [inputs, setInputs] = useState({});
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form5</h2>
      <label>Enter your shoe size:
        <input 
          type="number"
          name="shoeSize"
          value={inputs.shoeSize || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your favorite color:
        <input
          type="text"
          name="favColor"
          value={inputs.favColor || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your favorite drink:
        <input
          type="text"
          name="favDrink"
          value={inputs.favDrink || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Next"/>
    </form>
  );
}
