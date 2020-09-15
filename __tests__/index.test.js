'use strict';

const server = require('../src/server');
const routes = require('../src/routes');
const supertest = require('supertest');
const request = supertest(server);

describe('Test endpoint', () => {
  test('Should get test data from test endpoint', async () => {
    const response = await request.get(routes.TEST);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('it is working fine');
  });
});