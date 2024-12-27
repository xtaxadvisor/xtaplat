// src/utils/fetchData.ts
import supabase from '../services/supabaseClient';

// Example interface for the data you're fetching (customize as needed):
export interface SomeData {
  id: number;
  name: string;
  // Add fields that match your table
}

export default async function fetchData(): Promise<SomeData[]> {
  const { data, error } = await supabase
    .from('your-table-name')
    .select('*');

  if (error) {
    throw new Error(error.message);
  }

  // data can be null, so return an empty array fallback
  return data ?? [];
}