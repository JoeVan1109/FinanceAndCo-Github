import { Router } from 'express';
import { homeController } from '../controllers/homeController.js';

export const router = Router();

router.get('/', homeController.getHome);
