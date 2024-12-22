import React, { useEffect, useState } from 'react';
import { clientService } from '../services/api/clientService';
const ClientDetails = ({ clientId }) => {
    const [client, setClient] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        clientService
            .getById(clientId)
            .then((data) => setClient(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [clientId]);
    const handleUpdate = () => {
        if (!client)
            return;
        const updatedClient = { ...client, name: 'Updated Name' };
        clientService
            .update(updatedClient)
            .then((data) => setClient(data))
            .catch((err) => setError(err.message));
    };
    const handleDelete = () => {
        clientService
            .delete(clientId)
            .then(() => setClient(null))
            .catch((err) => setError(err.message));
    };
    if (loading)
        return <div>Loading client details...</div>;
    if (error)
        return <div>Error: {error}</div>;
    if (!client)
        return <div>Client not found.</div>;
    return (<div>
      <h1>{client.name}</h1>
      <p>Email: {client.email}</p>
      <p>Phone: {client.phone}</p>
      <button onClick={handleUpdate}>Update Client</button>
      <button onClick={handleDelete}>Delete Client</button>
    </div>);
};
export default ClientDetails;
