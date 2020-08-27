import React, { useState } from "react";
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (event) => {
    event.persist();
    setFormValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
    // validate input
    if ((formValues.firstName !=='') && (formValues.lastName !=='') && (formValues.email.includes('@'))) {
      setShowSubmit('true');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
};

  const [showSubmit, setShowSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      <div className="App-form">

      <form className="form" onSubmit={handleSubmit}>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleInputChange}
        />

        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
        />

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
         <button className="form-submit" type="submit" disabled={!showSubmit}>
          Register
        </button>

        {submitted && <div className='form-message'>Thank you!</div>}

        </form>
      </div>
    </div>

  );
}

export default App;
