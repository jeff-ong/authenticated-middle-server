const express = require('express');
const cors = require('cors');
const { testFetchData } = require('./util');

const server = express();

server.use(cors());

const start = (endpoints, port) => {
  try {
    server.get('/:endpoint', (req, res) => {
      const endpoint = endpoints.filter((endpoint) => endpoint === req.params.endpoint);
      endpoint.length >= 1 && res.status(200).send(testFetchData(endpoint));
    });
    server.listen(port || 8888, () => {
      console.log(`your server is running on ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = { start };
