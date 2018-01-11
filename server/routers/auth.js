import Router from 'koa-router';

import {
  signUP,
  signIN,
} from '../controllers/auth';

const router = new Router();

router
  .post('/sign-up', signUP)
  .post('/sign-in', signIN)

export default router;