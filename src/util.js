const fetch = require('node-fetch');
const base64 = require('base-64');

const fetchData = async (url, endpoint, username, password) => {
  const headers = {
    Authorization: 'Basic ' + base64.encode(username + ':' + password),
  };
  try {
    return await fetch(`${url}${endpoint}`, { headers })
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

const testFetchData = data => {
  return { message: 'it is an endpoint for ' + data};
};

module.exports = { fetchData, testFetchData };
