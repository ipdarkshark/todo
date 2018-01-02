import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';

import config from './config';
import todosRouter from './routers/todos';

const app = new Koa();
const router = new Router();
app.use(bodyParser())

app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
}))

app.use(todosRouter.routes())

app.listen(config.port, () => console.log(`server started on ${config.port}`));