import { mockDB } from '../mockDB';

export const getTodos = ctx => {
  try {
    ctx.body = mockDB.todos;
  } catch(error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
}

export const addTodo = ctx => {
  try {
    const data = ctx.request.body;
    mockDB.todos.push(data);
    ctx.body = data;
  } catch(error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
}

export const deleteTodo = ctx => {
  try {
    const index = mockDB.todos.findIndex(todo => todo.id == ctx.params.id);
    mockDB.todos.splice(index, 1);
    ctx.body = ctx.params.id;
  } catch(error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
}

export const editTodo = ctx => {
  try {
    const todo = mockDB.todos.find(todo => todo.id === ctx.request.body.id);
    todo.title = ctx.request.body.title;
    ctx.body = ctx.request.body;
  } catch(error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
}

export const toggleTodo = ctx => {
  try {
    const todo = mockDB.todos.find(todo => todo.id == ctx.params.id);
    todo.completed = !todo.completed;
    ctx.body = ctx.params.id;
  } catch(error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
}