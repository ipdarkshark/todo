import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';

const port = 3012;

const app = new Koa();
app.use(bodyParser())
const router = new Router();

const mockDB = {
  todos: [
    {
      id: 0,
      title: 'Task 1',
      completed: false,
    },
    {
      id: 1,
      title: 'Task 2',
      completed: true,
    },
    {
      id: 2,
      title: 'Task 3',
      completed: true,
    },
    {
      id: 3,
      title: 'Task 4',
      completed: true,
    }
  ]
}

router
  .get('/todos', ctx => {
    ctx.body = mockDB.todos;
  })
  .post('/todos', ctx => {
    const data = ctx.request.body;
    mockDB.todos.push(data);
    ctx.body = data;
  })
  .delete('/todos/:id', ctx => {
    const index = mockDB.todos.findIndex(todo => todo.id == ctx.params.id);
    mockDB.todos.splice(index, 1);
    ctx.body = ctx.params.id;
  })
  .put('/todos', ctx => {
    const todo = mockDB.todos.find(todo => todo.id === ctx.request.body.id);
    todo.title = ctx.request.body.title;
    ctx.body = ctx.request.body;
  })

app.use(cors())
app.use(router.routes())

app.listen(port, () => console.log(`server started on ${port}`));