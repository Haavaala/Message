import express from 'express';
import { createClient} from '@supabase/supabase-js'
import 'dotenv/config'


const app = express();

const PORT = 3000;

const supabaseUrl = 'https://dazgubbmwzocyuxhnats.supabase.co'
const supabaseKey = process.env.ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
}
);

export { supabase }
