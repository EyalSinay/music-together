const PASSWORD = process.env.PORT ? process.env.PASSWORD : require('./dev.js');

module.exports = PASSWORD;

const RapidAPI_KEY = process.env.PORT
  ? process.env.RapidAPI_KEY
  : require('./dev.js');

module.exports = RapidAPI_KEY;
