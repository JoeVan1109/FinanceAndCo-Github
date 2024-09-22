import { Router } from 'express';
import { errorHandler } from '../error/errorhandler.js';
import { HttpError } from '../error/httperror.js';
import { userController } from '../controllers/userController.js';

export const router = Router();

router.get('/users', userController.getUser);


router.use((req, res, next)=>{
    next(new HttpError(404, 'Resource not found'));
});

router.use(errorHandler);