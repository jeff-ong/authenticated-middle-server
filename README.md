# simple-proxy-server

[![GitHub license](https://img.shields.io/github/license/jeff-ong/simple-proxy-server)](https://github.com/jeff-ong/simple-proxy-server/blob/master/LICENSE) [![Known Vulnerabilities](https://snyk.io/test/github/jeff-ong/simple-proxy-server/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jeff-ong/simple-proxy-server?targetFile=package.json)


A simple proxy server to help you fetch data from third-party endpoints. The main goal is to overcome [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) in local development environment when interacting with remote data endpoints.

### Get started

- Clone the repo into your local environment
- `cd simple-proxy-server`
- `cp .env.template .env`
- `npm start`

Inside `.env`, define the credentials required for making requests to the your endpoints. The default port is 8888. After you have finished setting up the .env, run `npm start`, then you will have a local proxy up and running on `http://localhost:[PORT]`

Next, you will have to update your app to make requests to `http://localhost:[PORT]` instead in your local development environment.

