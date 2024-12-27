import React, { useEffect, useState } from 'react';
import supabase from '../services/supabaseClient';
import './SupabaseDataComponent.css';

const SupabaseDataComponent: React.FC = () => {
  const [data, setData] = useState<any[]>([]); // Use specific types if available
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Ensure loading is set to true at the start
      try {
        const { data, error } = await supabase.from('your-table-name').select('*');
        if (error) {
          setError(error.message);
        } else {
          setData(data || []); // Ensure null fallback is handled
        }
      } catch (err) {
        setError((err as Error).message || 'Unexpected error occurred');
      } finally {
        setLoading(false); // Ensure loading stops
      }
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (error) return <div className="error-red">Error: {error}</div>;

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