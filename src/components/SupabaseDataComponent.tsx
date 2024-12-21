import React, { useEffect, useState } from 'react';
import supabase from '../services/supabaseClient';

const SupabaseDataComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('your-table-name').select('*');
      if (error) {
        setError(error.message);
      } else {
        setData(data || []);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Supabase Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SupabaseDataComponent;