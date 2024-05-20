// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ejccknvgsubhhvnvjqwo.supabase.co';
const supabaseKey = 'key';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
