import React, { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';
const DataComponent = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchData();
                setData(response);
            }
            catch (err) {
                setError(err.message || 'Error fetching data');
            }
        };
        getData();
    }, []);
    if (error)
        return <div>Error: {error}</div>;
    if (!data.length)
        return <div>Loading...</div>;
    return (<div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item, index) => (<li key={index}>{JSON.stringify(item)}</li>))}
      </ul>
    </div>);
};
export default DataComponent;
