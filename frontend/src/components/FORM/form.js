// File: Form.js

import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API request using Axios
      const response = await axios.post('http://localhost:5001', {
        username,
        age,
      });

      // Handle the API response
      console.log('API Response:', response.data);

      // Clear form inputs
      setUsername('');
      setAge('');
    } catch (error) {
      // Handle API error
      console.error('API Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
