#!/usr/bin/env node
const { start } = require('../../server');
const { getConfig } = require('../config');
const {pass} = require('../message');

getConfig().then((config) => {
  try {
    const { port, endpoints } = config;
    start(endpoints, port);
    pass('Devserver is Live!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
