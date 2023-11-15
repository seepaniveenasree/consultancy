import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditClient = () => {
    const { clientId } = useParams();
    const [clientData, setClientData] = useState({});
    
    // Fetch existing client data for editing
    useEffect(() => {
        axios.get(`/api/clients/${clientId}`)
            .then(response => setClientData(response.data))
            .catch(error => console.error('Error fetching client data:', error));
    }, [clientId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData({ ...clientData, [name]: value });
    };

    const handleEditClient = () => {
        // Send a PUT request to update the client data
        axios.put(`/api/clients/${clientId}`, clientData)
            .then(response => {
                console.log('Client updated successfully:', response.data);
                // Redirect or update the state as needed
            })
            .catch(error => console.error('Error updating client:', error));
    };

    return (
        <div>
            <h1>Edit Client</h1>
            {/* Form to edit client data */}
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={clientData.name} onChange={handleInputChange} />
                <label>Email:</label>
                <input type="text" name="email" value={clientData.email} onChange={handleInputChange} />
                {/* Add more input fields as needed */}
                <button type="button" onClick={handleEditClient}>Save Changes</button>
            </form>
        </div>
    );
}

export default EditClient;
