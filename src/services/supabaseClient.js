import { createClient } from '@supabase/supabase-js';

// Environment variables for Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl) {
  throw new Error('Missing Supabase URL. Please set VITE_SUPABASE_URL in your environment variables.');
}

if (!supabaseKey) {
  throw new Error('Missing Supabase Key. Please set VITE_SUPABASE_KEY in your environment variables.');
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;