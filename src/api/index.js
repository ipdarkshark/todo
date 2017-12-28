import { apiHost } from '../../config.json';

const call = (path, ...args) => fetch(`${apiHost}${path}`, ...args);

export const getAllTodos = () => call('/todos')
  .then(res => res.json())
  .then(data => data)