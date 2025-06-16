import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import movieRoutes from './routes/Movie_Routes.js';

const app = express();
app.use(cors());
app.use(json());

app.use('/api/movies', movieRoutes);

connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => console.log(err));
