
import { checking, Login, Signup } from '../controllers/userControllers.js';
import { Router } from 'express';

const router = Router();


router.get('/', checking);
router.post('/api/create_user', Signup)
router.get('/api/login_user', Login)

export default router