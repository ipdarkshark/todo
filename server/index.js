import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';

const port = 3012;
import todosRouter from './routers/todos';

const app = new Koa();
const router = new Router();
app.use(bodyParser())

app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
}))

app.use(todosRouter.routes())

app.listen(port, () => console.log(`server started on ${port}`));