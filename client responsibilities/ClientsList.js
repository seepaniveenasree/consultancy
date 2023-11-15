import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientsList = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        // Fetch clients from the server
        axios.get('/api/clients')
            .then(response => setClients(response.data))
            .catch(error => console.error('Error fetching clients:', error));
    }, []);

    return (
        <div>
            <h1>Clients List</h1>
            {/* Render the list of clients */}
            <ul>
                {clients.map(client => (
                    <li key={client._id}>{client.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ClientsList;
