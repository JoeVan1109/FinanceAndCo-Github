import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './routers/index.js';
import dotenv from 'dotenv';
dotenv.config();

console.log('Variables d\'environnement du backend:', {
    PORT: process.env.PORT,
    PGUSER: process.env.PGUSER,
    PGDATABASE: process.env.PGDATABASE,
    PGPASSWORD: process.env.PGPASSWORD,
    PGHOST: process.env.PGHOST,
    PGPORT: process.env.PGPORT,
});

export const app = express();

app.use(helmet());
app.use(cors({ origin:process.env.CORS }));

app.use(express.static('./public'));

app.use(express.json());
app.use('/api',router);
