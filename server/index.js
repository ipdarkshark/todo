import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import jwt from 'koa-jwt';

const port = 3012;
import todosRouter from './routers/todos';
import authRouter from './routers/auth';

const app = new Koa();
const router = new Router();

app.use(bodyParser())
app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
}))

app.use(jwt({ secret: 'secret' })
  .unless({
    path: [/^\/sign-in/, /^\/sign-up/]
  })
);



app.use(authRouter.routes())
app.use(todosRouter.routes())

app.listen(port, () => console.log(`server started on ${port}`));