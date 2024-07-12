const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV || 'production';

dotenv.config({
  path: path.resolve(__dirname, `${env}.env`)
});

const config = {
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  pass: process.env.MYSQL_ADDON_PASSWORD,
  port_db: process.env.MYSQL_ADDON_PORT,
  port_server: process.env.PORT_SERVER,
  secretKey: process.env.SECRET_KEY,
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN,
  database: process.env.MYSQL_ADDON_DB
};

module.exports = config;
