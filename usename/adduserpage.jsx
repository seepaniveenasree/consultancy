import React, { useState } from 'react';
import axios from 'axios';

const AddUserPage = () => {
  const [username, setUsername] = useState('');

  const handleAddUser = () => {
    // Make a POST request to add a new user
    axios.post('/api/users', { username })
      .then(response => {
        // Handle success, e.g., redirect to the user list page
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Add User</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUserPage;