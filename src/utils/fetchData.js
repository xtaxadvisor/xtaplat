// src/utils/fetchData.ts
import supabase from '../services/supabaseClient';
export default async function fetchData() {
    const { data, error } = await supabase
        .from('your-table-name')
        .select('*');
    if (error) {
        throw new Error(error.message);
    }
    // data can be null, so return an empty array fallback
    return data ?? [];
}
