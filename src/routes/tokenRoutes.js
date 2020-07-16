import { Router } from 'express';
import tokenConstroller from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenConstroller.store);

export default router;
