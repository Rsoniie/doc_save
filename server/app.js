import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import connectDB from './db/db_connection.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());

await connectDB();

const PORT = 3000;

app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log("App is running on PORT", PORT);
})


