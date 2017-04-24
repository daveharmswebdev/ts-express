import { Router, Request, Response } from 'express';
const router: Router = Router();

// routes
import login from './login';
import logout from './logout';

router.use(login);
router.use(logout);

export default router;
