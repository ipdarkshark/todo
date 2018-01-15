import { apiHost } from '../../config.json';

const call = (path, ...args) => fetch(`${apiHost}${path}`, ...args);
export const headers = new Headers({ 'Content-Type': 'application/json' });

export const getAllTodos = () => call('/todos', { headers })
  .then(res => res.json())
  .then(data => data);


export const addNewTodo = todo => call('/todos', {
  method: 'POST',
  headers,
  body: JSON.stringify({
    title: todo,
    completed: false,
  }),
})
  .then(res => res.json())
  .then(data => data);


export const deleteTodo = id => call(`/todos/${id}`, {
  method: 'DELETE',
  headers,
})
  .then(res => res.text())
  .then(data => data);


export const editTodo = (id, todo) => call('/todos/', {
  method: 'PUT',
  headers,
  body: JSON.stringify({
    id,
    title: todo,
  }),
})
  .then(res => res.json())
  .then(data => data);


export const toggleTodo = id => call(`/todos/${id}`, {
  method: 'PATCH',
  headers,
})
  .then(res => res.text())
  .then(data => data);


export const signUp = user => call('/sign-up', {
  method: 'POST',
  headers,
  body: JSON.stringify({
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    password: user.password,
  }),
})
  .then(res => res.json())
  .then(data => data);


export const signIn = user => call('/sign-in', {
  method: 'POST',
  headers,
  body: JSON.stringify({
    username: user.username,
    password: user.password,
  }),
})
  .then(res => res.json())
  .then(data => data.token);
