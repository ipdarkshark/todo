import Koa from 'koa';
import Router from 'koa-router';
import cors from 'koa-cors';

const port = 3012;

const app = new Koa();
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
    ctx.body = mockDB.todos
  })
  .get('/todos/:id', ctx => {
    const todo = mockDB.todos.find(todo => todo.id == ctx.params.id)
    ctx.body = todo
  })

app.use(cors())
app.use(router.routes())

app.listen(port, () => console.log(`server started on ${port}`));