import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jbkagdtqtlnomvisnfna.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Ensure this is set in your .env file
export const supabase = createClient(supabaseUrl, supabaseKey);