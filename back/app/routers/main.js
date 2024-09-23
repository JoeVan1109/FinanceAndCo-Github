import { Router } from 'express';

import { HttpError } from '../error/httperror.js';

// importer les différents routeurs
import { router as loginRouter } from './login.js';
import { router as userRouter } from './users.js';
import { router as homeRouter } from './home.js';


const router = Router();

// page d'accueil de l'API
router.get('/', (req, res) => {
    res.send('Welcome to my awesome Finance And Co API!');
});

// route API vers users
router.use('/users',userRouter);

// route API vers login
router.use('/login', loginRouter);


// route API vers home
router.use('/home', homeRouter);

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