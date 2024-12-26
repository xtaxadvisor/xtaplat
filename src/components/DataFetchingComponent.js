import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axiosConfig'; // Ensure this path is correct or adjust it to the correct location
// If the path is incorrect, adjust it to the correct location
// For example: import axiosInstance from '../../api/axiosConfig';
const DataFetchingComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosInstance.get('/data-endpoint') // Replace '/data-endpoint' with your API endpoint
            .then((response) => {
            setData(response.data);
            setLoading(false);
        })
            .catch(function (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, []);
    if (loading)
        return _jsx("div", { children: "Loading..." });
    return (_jsxs("div", { children: [_jsx("h1", { children: "Fetched Data" }), _jsx("pre", { children: JSON.stringify(data, null, 2) })] }));
};
export default DataFetchingComponent;
