const server = require('./server');

const port = process.env.PORT || 8888;

server.listen(port, () => {
  console.log(`Proxy server is running on ${port}`);
});