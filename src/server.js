require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const { fetchData, testFetchData } = require('./util');

const app = express();

app.use(cors());

/*
 * Define endpoints here
 */

app.get(routes.HOME, async (_, res) => {
  res.status(200).send(await fetchData('/'));
});

app.get(routes.TEST, async (_, res) => {
  res.status(200).send(testFetchData());
});

module.exports = app;
