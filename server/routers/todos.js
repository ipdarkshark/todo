import Router from 'koa-router';

import {
  getTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from '../controllers/todos';

const router = new Router();

router
  .get('/todos', getTodos)
  .post('/todos', addTodo)
  .delete('/todos/:id', deleteTodo)
  .put('/todos', editTodo)
  .patch('/todos/:id', toggleTodo)

export default router;