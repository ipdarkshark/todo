const models = require('../models');

const todos = models.Todo;

export const getTodos = async (ctx) => {
  try {
    ctx.body = await todos.findAll({
      where: {
        userId: ctx.state.user.id,
      },
    });
  } catch (error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
};

export const addTodo = async (ctx) => {
  try {
    const { title, completed } = ctx.request.body;
    const todo = await todos.create({
      title,
      completed,
      userId: ctx.state.user.id,
    });
    ctx.body = todo;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
};

export const deleteTodo = async (ctx) => {
  try {
    await todos.destroy({
      where: {
        id: ctx.params.id,
        userId: ctx.state.user.id,
      },
    });
    ctx.body = ctx.params.id;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
};


export const editTodo = async (ctx) => {
  try {
    const { id, title } = ctx.request.body;
    await todos.update(
      { title }, 
      { where: { id, userId: ctx.state.user.id } }
    );
    ctx.body = ctx.request.body;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
};

export const toggleTodo = async (ctx) => {
  try {
    const todo = await todos.findOne(
      { where: { id: ctx.params.id, userId: ctx.state.user.id } }
    );
    await todos.update(
      { completed: !todo.dataValues.completed },
      { where: { id: ctx.params.id } }
    );
    ctx.body = ctx.params.id;
  } catch (error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
};
