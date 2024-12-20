// src/databaseOps.js

import { supabase } from './supabaseClient';

// Fetch data from a table
export async function fetchData(tableName) {
    const { data, error } = await supabase
        .from(tableName)
        .select('*');
    if (error) {
        console.error('Error fetching data:', error);
        return null;
    }
    return data;
}

// Insert data into a table
export async function insertData(tableName, newData) {
    const { data, error } = await supabase
        .from(tableName)
        .insert([newData]);
    if (error) {
        console.error('Error inserting data:', error);
        return null;
    }
    return data;
}