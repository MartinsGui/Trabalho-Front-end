// src/jsonServer.js
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '..', 'public', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
