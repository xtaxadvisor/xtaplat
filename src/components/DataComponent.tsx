import React, { useEffect, useState } from 'react';
import fetchData, { SomeData } from '../utils/fetchData';

const DataComponent: React.FC = () => {
  const [data, setData] = useState<SomeData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // fetchData now returns SomeData[], so 'response' is typed
        const response = await fetchData();
        setData(response);
      } catch (err: any) {
        setError(err.message || 'Error fetching data');
      }
    };

    getData();
  }, []);

  // Show any error
  if (error) return <div>Error: {error}</div>;

  // Show "Loading..." if no data yet
  if (!data.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;