import { Router } from 'express';
import homeConstroller from '../controllers/HomeController';

const router = new Router();

router.get('/', homeConstroller.index);

export default router;
