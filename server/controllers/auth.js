import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const models = require('../models');
const users = models.User;

export const signUP = async (ctx) => {
  try {
    const { username, firstname, lastname, password } = ctx.request.body;
    const bcryptPassword = await bcrypt.hash(password, 5);
    const user = await users.create({
      username,
      firstname,
      lastname,
      password: bcryptPassword
    });
    ctx.body = {
      title: 'Successfully signed!',
      content: 'Please login'
    }
    ctx.status = 200;
  } catch(error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
}

export const signIN = async (ctx) => {
  try {
    const { username, password } = ctx.request.body;
    const user = await users.findOne(
      {where: {username}}
    );
    const checkedPassword = await bcrypt.compare(password, user.password);

    if (!user) throw new Error('Username is invalid');
    if (checkedPassword) {
      const token = jwt.sign({
        id: user.id,
        username: user.username
      }, 'secret');
      ctx.status = 200;
      ctx.body = {token};
    } else {
      ctx.status = 401;
      ctx.body = 'Invalid password';
    }
  } catch(error) {
    ctx.body = 'Invalid username';
    ctx.status = error.status || 401;
  }
}