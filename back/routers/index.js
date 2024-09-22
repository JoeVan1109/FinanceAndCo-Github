import { Router } from 'express';
import { errorHandler } from '../error/errorhandler.js';
import { HttpError } from '../error/httperror.js';
import { router as loginRouter } from './login.js';


export const router = Router();

router.use('/login', loginRouter);


router.use((req, res, next)=>{
    next(new HttpError(404, 'Resource not found'));
});

router.use(errorHandler);