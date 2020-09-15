const fetch = require('node-fetch');
const base64 = require('base-64');

const apiUrl = process.env.API_URL_ENV;
const username = process.env.USER_ENV;
const password = process.env.PASSWORD_ENV;

const headers = {
  Authorization: 'Basic ' + base64.encode(username + ':' + password),
};

const fetchData = async (endpoint) => {
  try {
    return await fetch(`${apiUrl}${endpoint}`, { headers })
      .then((res) => {
        if (res.status >= 400) {
          console.error(res.statusText);
          throw new Error('Unauthorized');
        }
        return res.json();
      })
      .then((res) => res)
      .catch((err) => console.error(err));
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data from external source');
  }
};

const testFetchData = () => {
  return { message: 'it is working fine' };
};

module.exports = { fetchData, testFetchData };
