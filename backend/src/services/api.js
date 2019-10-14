const axios = require("axios");

const baseURL = process.env.API_URL || "https://api.mercadolibre.com";

const api = axios.create({
  baseURL
});

module.exports = api;
