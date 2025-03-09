import Router from 'express'
import { saveContent } from "../controllers/contentControllers.js";

const router = Router();

router.post('/api/save', saveContent);

export default router;
