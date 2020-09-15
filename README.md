# authenticated-mirror-server

[![GitHub license](https://img.shields.io/github/license/jeff-ong/simple-proxy-server)](https://github.com/jeff-ong/simple-proxy-server/blob/master/LICENSE) [![Known Vulnerabilities](https://snyk.io/test/github/jeff-ong/simple-proxy-server/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jeff-ong/simple-proxy-server?targetFile=package.json)


A local server that mirrors your protected production API endpoints. It lets you connect your local app to your remote server with protected request header.

### Get started

- Clone the repo into your local environment
- `cd simple-proxy-server`
- `cp .env.template .env`
- `npm start`

Inside `.env`, define the credentials required for making requests to the your endpoints. The default port is 8888. After you have finished setting up the .env, run `npm start`, then you will have a local proxy up and running on `http://localhost:[PORT]`

Next, you will have to update your app to make requests to `http://localhost:[PORT]` instead in your local development environment.

