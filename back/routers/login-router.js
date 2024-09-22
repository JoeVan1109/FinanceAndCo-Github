import { Router } from 'express';
import { loginController } from '../controllers/YController.js';

const router = Router();

router.get('/', loginController.renderLoginPage);
router.post('/', loginController.renderLoginPage);

export default router;