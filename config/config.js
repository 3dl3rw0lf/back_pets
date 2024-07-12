const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

dotenv.config({
  path: path.resolve(__dirname, `${env}.env`)
});

const config = {
  host: process.env.MYSQL_ADDON_HOST || process.env.HOST,
  user: process.env.MYSQL_ADDON_USER || process.env.USER,
  pass: process.env.MYSQL_ADDON_PASSWORD || process.env.PASS,
  port_db: process.env.MYSQL_ADDON_PORT || process.env.PORT_DB,
  database: process.env.MYSQL_ADDON_DB || 'pets_lost',
  port_server: process.env.PORT_SERVER || 3000,
  secretKey: process.env.SECRET_KEY || 'secret',
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN || '1h'
};

module.exports = config;
