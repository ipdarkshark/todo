import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const models = require('../models');
const users = models.User;

export const signUP = async (ctx) => {
  try {
    const {username, firstname, lastname, password} = ctx.request.body;
    const bcryptPassword = await bcrypt.hash(password, 5);
    const user = await users.create({
      username,
      firstname,
      lastname,
      password: bcryptPassword
    })
    const token = jwt.sign({
      user
    }, 'secret')
    ctx.body = {token};
  } catch(error) {
    ctx.body = error.message;
    ctx.status = error.status || 500;
  }
}