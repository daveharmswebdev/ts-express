import { Application, Request, Response } from 'express';
import routes from './routes';

export function initRestApi(app: Application) {

  app.use(routes);

}