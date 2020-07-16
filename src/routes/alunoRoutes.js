import { Router } from 'express';
import alunoConstroller from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoConstroller.index);
router.post('/', loginRequired, alunoConstroller.store);
router.put('/:id', loginRequired, alunoConstroller.update);
router.get('/:id', alunoConstroller.show);
router.delete('/:id', loginRequired, alunoConstroller.delete);

export default router;
