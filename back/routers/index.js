import { Router } from 'express';
import { errorHandler } from '../error/errorhandler.js';
import { HttpError } from '../error/httperror.js';

export const router = Router();

router.get('/home', (req, res, next)=>{
    res.render('home');
});

router.use((req, res, next)=>{
    next(new HttpError(404, 'Resource not found'));
});

router.use(errorHandler);