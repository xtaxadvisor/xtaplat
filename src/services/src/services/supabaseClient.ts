import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jbkagdtqtlnomvisnfna.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Securely load the Anon Key from environment variables
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;