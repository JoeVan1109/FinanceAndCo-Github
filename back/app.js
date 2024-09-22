import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './routers/index.js';
import dotenv from 'dotenv';
import { client } from './models/client.js';  // Assurez-vous que ce chemin est correct

dotenv.config();

console.log('Variables d\'environnement du backend:', {
    PORT: process.env.PORT,
    PGUSER: process.env.PGUSER,
    PGDATABASE: process.env.PGDATABASE,
    PGPASSWORD: process.env.PGPASSWORD,
    PGHOST: process.env.PGHOST,
    PGPORT: process.env.PGPORT,
});

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS }));

app.use(express.static('./public'));

app.use(express.json());
app.use(router);

// Fonction pour démarrer le serveur
async function startServer() {
    try {
        await client.authenticate();
        console.log(`🚀 database ${process.env.PGDATABASE} connected to http://localhost:${process.env.PGPORT}`);
        
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

// Démarrer le serveur
startServer();

export { app };