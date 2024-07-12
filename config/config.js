const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV || 'production';

dotenv.config({
  path: path.resolve(__dirname, `${env}.env`)
});

const config = {
  host: process.env.MYSQL_ADDON_HOST || process.env.HOST,
  user: process.env.MYSQL_ADDON_USER || process.env.USER,
  pass: process.env.MYSQL_ADDON_PASSWORD || process.env.PASS,
  port_db: process.env.MYSQL_ADDON_PORT || process.env.PORT_DB,
  port_server: process.env.PORT_SERVER || 3000,
  secretKey: process.env.SECRET_KEY || 'secret',
  tokenExpiresIn: process.env.TOKEN_EXPIRES_IN || '1h',
  database: process.env.MYSQL_ADDON_DB || 'pets_lost'
};

module.exports = config;
