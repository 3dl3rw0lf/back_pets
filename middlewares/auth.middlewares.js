const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ auth: false, message: 'No se provee token en la cabecera' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).send({ auth: false, message: 'No se provee token' });
  }

  const secretKey = config.secretKey;

  jwt.verify(token, secretKey, (error, decoded) => {
    if (error) {
      return res.status(500).send({ auth: false, message: 'Error al autenticar el token.' });
    }

    req.userId = decoded.id;
    req.username = decoded.username;
    next();
  });
};

module.exports = authMiddleware;
