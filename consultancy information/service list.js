// ServiceDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceDetails = () => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const [newDetail, setNewDetail] = useState({
    // Fields for the new service detail
  });

  useEffect(() => {
    // Fetch service details from the API
    axios.get('/api/service-details')
      .then(response => setServiceDetails(response.data))
      .catch(error => console.error('Error fetching service details:', error));
  }, []);

  const handleAddDetail = () => {
    // Send a request to add a new service detail
    axios.post('/api/service-details', newDetail)
      .then(response => setServiceDetails([...serviceDetails, response.data]))
      .catch(error => console.error('Error adding service detail:', error));
  };

  const handleDeleteDetail = (id) => {
    // Send a request to delete a service detail
    axios.delete(`/api/service-details/${id}`)
      .then(() => setServiceDetails(serviceDetails.filter(detail => detail._id !== id)))
      .catch(error => console.error('Error deleting service detail:', error));
  };

  return (
    <div>
      <h1>Service Details</h1>
      {/* Add content for the service details page */}
      <button onClick={handleAddDetail}>Add Service Detail</button>
      <ul>
        {serviceDetails.map(detail => (
          <li key={detail._id}>
            {detail.name} {/* Adjust this based on your actual schema fields */}
            <button onClick={() => handleDeleteDetail(detail._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetails;
