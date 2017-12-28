export default {
  port: process.env.PORT || 8888,
  debug: true,
  jwt: {
    secret: 'private',
  },
  db: {
    host: 'localhost',
    user: 'root',
    password: '1',
    database: 'todos',
  }
}