import { Router } from 'express';
import { errorHandler } from '../error/errorhandler.js';
import { HttpError } from '../error/httperror.js';

export const router = Router();



router.use((req, res, next)=>{
    next(new HttpError(404, 'Resource not found'));
});

router.use(errorHandler);