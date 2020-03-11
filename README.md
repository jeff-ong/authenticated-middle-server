# simple-proxy-server

A simple proxy server to help you fetch data from third-party endpoints. The main purpose is to overcome [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) in local development environment

### Get started

- Clone the repo into your local environment
- `cd simple-proxy-server`
- `cp .env.template .env`
- `npm start`

Inside `.env`, define the credentials required for making requests to the url endpoint. The default port is 8888 if one is not provided. After you have finished setting up the .env, run `npm start`, then you will have a local proxy up and running on `http://localhost:[PORT]`

Next, you will have to update your app to make requests to `http://localhost:[PORT]` instead in your local environment.

## To be added

- Unit testing with Jest
- Allow POST requests

