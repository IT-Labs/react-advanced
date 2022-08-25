const jsonServer = require('json-server')
var server = jsonServer.create();

server.use(jsonServer.defaults());
server.use((req, res, next) => {
  setTimeout(next, 1000);
});
server.use(jsonServer.router("db.json"));

server.listen(5000, () => {
  console.log('JSON Server is running')
});
