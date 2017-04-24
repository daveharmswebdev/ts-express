import * as express from 'express';
import { Request, Response, Application } from 'express';

import { initRestApi } from './api/api';

const app: Application = express();

const PORT: number = process.env.PORT || 8080;

initRestApi(app);

app.listen(PORT, function() {
  console.log(`Now listening on port ${PORT}`);
})