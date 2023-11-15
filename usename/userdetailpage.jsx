import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserDetailPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the API based on userId
    axios.get(/api/users/${userId})
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p>Username: {user.username}</p>
      {/* Display other user details */}
    </div>
  );
};

export default UserDetailPage;