// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ejccknvgsubhhvnvjqwo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqY2NrbnZnc3ViaGh2bnZqcXdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MTI0MjYsImV4cCI6MjAyOTk4ODQyNn0.BxPWzY3j9IPG8lpH2Dk6QT79Z3gpO6dviTy6Z4Ml4YM';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;