
import { checking } from '../controllers/userControllers.js';
import { Router } from 'express';

const router = Router();


router.get('/', checking);

export default router