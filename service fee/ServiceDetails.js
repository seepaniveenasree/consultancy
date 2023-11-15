// ServiceDetail.js
import React from 'react';

const ServiceDetail = ({ match }) => {
  // Use match.params to get the service ID from the URL
  const serviceId = match.params.id;

  // Fetch the service details from the backend API using serviceId
  // Display the details
};

export default ServiceDetail;