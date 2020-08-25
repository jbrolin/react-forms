import React, { useState } from "react";
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setFormValues((formValues) => ({
      ...formValues,
      firstName: event.target.value,
    }));
  };


  return (
    <div className="App">
      <div className="App-form">
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleFirstNameInputChange}
        />

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formValues.lastName}
        />

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={formValues.email}
        />
      </div>
    </div>

  );
}

export default App;
