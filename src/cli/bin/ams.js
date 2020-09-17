#!/usr/bin/env node

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const { fetchData, testFetchData } = require('../../util');

const server = require('../../server');

const { getConfig } = require('../config');

clear();

getConfig().then((config) => {
    try {
        const { url, username, password, port, endpoints } = config;
        server.get('/:endpoint', async (req, res) => {
            const reqEndpoint = req.params.endpoint;
            const endpoint = endpoints.filter((endpoint) => endpoint === reqEndpoint);
            endpoint.length >= 1 && res.status(200).send(testFetchData(endpoint));
        });
        server.listen(port, () => {
            console.log(`Proxy server is running on ${port}`);
        });
    } catch(error) {
        console.error(error);
        throw new Error(error);
    }
});