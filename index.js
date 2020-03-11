const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const base64 = require("base-64");

const app = express();
require("dotenv").config();

const apiUrl = process.env.API_URL_ENV;
const username = process.env.USER_ENV;
const password = process.env.PASSWORD_ENV;

const headers = {
  Authorization: "Basic " + base64.encode(username + ":" + password)
};

app.use(cors());

const fetchData = async endpoint => {
  try {
    return await fetch(`${apiUrl}${endpoint}`, { headers })
      .then(res => {
        if (res.status >= 400) {
          console.error(res.statusText);
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then(res => res)
      .catch(err => console.error(err));
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch data from external source");
  }
};

app.get("/general", async (_, res) => {
  res.status(200).send(await fetchData("general"));
});

app.get("/pages", async (_, res) => {
  res.status(200).send(await fetchData("pages"));
});

app.listen(9999, () => {
  console.log("Proxy server is listening on 9999");
});
