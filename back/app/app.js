import express from 'express';
import cors from 'cors';
import router from './routers/main.js';

export const app = express();

// Configuration de CORS
const corsOptions = {
    origin: process.env.CORS || '*',
    optionsSuccessStatus: 200 // Pour les anciens navigateurs et IE11
};
app.use(cors(corsOptions));

// Middleware pour parser le JSON
app.use(express.json());

// Préfixe pour les routes API
app.use('/api', router);

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ 
        message: err.message || 'Une erreur interne est survenue'
    });
});

// Gestion des routes non trouvées
app.use((req, res) => {
    res.status(404).json({ message: 'Route non trouvée' });
});