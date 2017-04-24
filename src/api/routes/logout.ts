import { Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/api/logout', (req: Request, res: Response) => {
  res.send({"message": "Hello /api/logout"});
})

export default router;