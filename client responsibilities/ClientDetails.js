import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ClientDetails = () => {
    const { clientId } = useParams();
    const [client, setClient] = useState({});

    useEffect(() => {
        // Fetch client details from the server
        axios.get(`/api/clients/${clientId}`)
            .then(response => setClient(response.data))
            .catch(error => console.error('Error fetching client details:', error));
    }, [clientId]);

    return (
        <div>
            <h1>Client Details</h1>
            {/* Display client details */}
            <p>Name: {client.name}</p>
            <p>Email: {client.email}</p>
            {/* Add more details as needed */}
        </div>
    );
}

export default ClientDetails;
