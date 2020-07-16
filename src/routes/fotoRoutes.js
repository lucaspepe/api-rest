import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import fotoConstroller from '../controllers/FotoController';

const router = new Router();

router.post('/', loginRequired, fotoConstroller.store);

export default router;
