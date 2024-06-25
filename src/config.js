const dotenv = require('dotenv');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

dotenv.config({
  path: path.resolve(__dirname, `${env}.env`),
});

const config = {
  host: process.env.HOST,
  user: process.env.USER,
  pass: process.env.PASS,
  port_db: process.env.PORT_DB,
  port_server: process.env.PORT_SERVER,
};

module.exports = config;
