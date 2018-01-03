import { apiHost } from '../../config.json';

const call = (path, ...args) => fetch(`${apiHost}${path}`, ...args);

export const getAllTodos = () => call('/todos')
  .then(res => res.json())
  .then(data => data)


export const addNewTodo = todo => call('/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: todo,
    completed: false
  }),
})
  .then(res => res.json())
  .then(data => data)


export const deleteTodo = id => call(`/todos/${id}`, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
})
  .then(res => res.text())
  .then(data => data)


export const editTodo = (id, todo) => call(`/todos/`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    id,
    title: todo
  }),
})
  .then(res => res.json())
  .then(data => data)


export const toggleTodo = id => call(`/todos/${id}`, {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
})
  .then(res => res.text())
  .then(data => data)