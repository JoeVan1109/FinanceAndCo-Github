import { Router } from 'express';

import { HttpError } from '../error/httperror.js';

// importer les différents routeurs


const router = Router();

// page d'accueil de l'API
router.get('/', (req, res) => {
    res.send('Welcome to my awesome Finance And Co API!');
});

// Ajout des routeurs de l'API
// - routeur pour les Pokémon


// erreur 404
router.use((req, res, next) => {
    next(new HttpError(404));
});

// gestion des erreurs
router.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ error: err.message });
});

export default router;