require("dotenv/config");
// const mongose = require('mongose');

module.exports.enums = Object.freeze({
  Telegram: {
    baseUrl: process.env.TELEGRAM_URL,
    key: process.env.TELEGRAM_KEY,
  },
  ApiPort: process.env.API_PORT,
  Mongo: {
    connString: process.env.MONGO_PORT,
  },
});
