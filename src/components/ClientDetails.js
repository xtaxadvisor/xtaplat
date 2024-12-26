import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
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
        return _jsx("div", { children: "Loading client details..." });
    if (error)
        return _jsxs("div", { children: ["Error: ", error] });
    if (!client)
        return _jsx("div", { children: "Client not found." });
    return (_jsxs("div", { children: [_jsx("h1", { children: client.name }), _jsxs("p", { children: ["Email: ", client.email] }), _jsxs("p", { children: ["Phone: ", client.phone] }), _jsx("button", { onClick: handleUpdate, children: "Update Client" }), _jsx("button", { onClick: handleDelete, children: "Delete Client" })] }));
};
export default ClientDetails;
