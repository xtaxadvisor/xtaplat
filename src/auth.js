// src/auth.js

import { supabase } from './supabaseClient';

// Sign up new users
export async function signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) return console.error('Error signing up:', error);
    return user;
}

// Log in existing users
export async function signIn(email, password) {
    const { user, error } = await supabase.auth.signIn({ email, password });
    if (error) return console.error('Error signing in:', error);
    return user;
}

// Sign out users
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) return console.error('Error signing out:', error);
    return true;
}