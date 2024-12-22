import React, { useEffect, useState } from 'react';
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
        return <div>Loading...</div>;
    return (<div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>);
};
export default DataFetchingComponent;
