import Router from 'koa-router';

import {
  signUP,
} from '../controllers/auth';

const router = new Router();

router
  .post('/sign-up', signUP)

export default router;