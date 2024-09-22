import { Router } from 'express';
import accueilRouter from './routers/accueil-router.js';
import { errorHandler } from './error/errorhandler.js';
import { HttpError } from './error/httperror.js';

const router = Router();

router.use('/', accueilRouter);

router.use((req, res, next) => {
    next(new HttpError(404, 'Resource not found'));
});

router.use(errorHandler);

export default router;