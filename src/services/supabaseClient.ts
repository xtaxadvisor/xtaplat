import { createClient } from '@supabase/supabase-js';

// Fetch Supabase environment variables
const supabaseUrl: string | undefined = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey: string | undefined = import.meta.env.VITE_SUPABASE_KEY;

// Validate environment variables
if (!supabaseUrl) {
  throw new Error('Missing Supabase URL. Please set VITE_SUPABASE_URL in your environment variables.');
}

if (!supabaseKey) {
  throw new Error('Missing Supabase Key. Please set VITE_SUPABASE_KEY in your environment variables.');
}

// Create the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;