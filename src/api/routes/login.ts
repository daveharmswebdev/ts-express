import { Router, Request, Response } from 'express';
const router: Router = Router();

import { showForm, passCredentials } from '../controllers/ctrlLogin';

router.get('/api/login', showForm);
router.post('/api/login', passCredentials);

export default router;