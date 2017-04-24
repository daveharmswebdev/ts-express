import { Request, Response } from 'express';

export const showForm = (req: Request, res: Response) => {
  res.send({message: "Hello /api/login"});
}

export const passCredentials = (req: Request, res: Response) => {
  console.log('We posted');
  res.send({message: "Posted to /api/login"});
}