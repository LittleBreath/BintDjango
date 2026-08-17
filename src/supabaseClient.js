import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nunytjknyqbwnxchrcre.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51bnl0amtueXFid254Y2hyY3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5ODg0NjMsImV4cCI6MjA5NjU2NDQ2M30.uKwl2KUOCVXcv8VkcbZlx9lzPBt_dGfguL24TEw3vjQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)