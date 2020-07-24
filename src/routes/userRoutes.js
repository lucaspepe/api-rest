import { Router } from 'express';
import userConstroller from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userConstroller.index);
// router.get('/:id', userConstroller.show);

router.post('/', userConstroller.store);
router.put('/', loginRequired, userConstroller.update);
router.delete('/', loginRequired, userConstroller.delete);

// guns

export default router;
