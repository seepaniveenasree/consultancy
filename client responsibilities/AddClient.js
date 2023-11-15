import React, { useState } from 'react';
import axios from 'axios';

const AddClient = () => {
    const [clientData, setClientData] = useState({
        name: '',
        email: '',
        // Add more fields as needed
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClientData({ ...clientData, [name]: value });
    };

    const handleAddClient = () => {
        // Send a POST request to add a new client
        axios.post('/api/clients', clientData)
            .then(response => {
                console.log('Client added successfully:', response.data);
                // Redirect or update the state as needed
            })
            .catch(error => console.error('Error adding client:', error));
    };

    return (
        <div>
            <h1>Add Client</h1>
            {/* Form to add a new client */}
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={clientData.name} onChange={handleInputChange} />
                <label>Email:</label>
                <input type="text" name="email" value={clientData.email} onChange={handleInputChange} />
                {/* Add more input fields as needed */}
                <button type="button" onClick={handleAddClient}>Add Client</button>
            </form>
        </div>
    );
}

export default AddClient;
