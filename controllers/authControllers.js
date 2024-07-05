const { v6: uuidv6 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = require('../models/userModel');

const config = require('../src/config');

const register = (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  const newUser = { id: uuidv6(), username, password: hashedPassword };

  user.push(newUser);

  const payload = { id: newUser, username: newUser.username };
  const secretKey = config.secretKey;
  const options = { expiresIn: config.tokenExpiresIn };

  const token = jwt.sign(payload, secretKey, options);

  res.status(201).send({ auth: true, token });
};

const login = (req, res) => {
  const { username, password } = req.body;

  const user = user.find((u) => u.username === username);

  if (!user) {
    return res.status(404).send({ message: 'Usuario inexistente' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send({ auth: false, token: null });
  }

  const payload = { id: user.id, username: user.username };
  const secretKey = config.secretKey;
  const options = { expiresIn: config.tokenExpiresIn };

  const token = jwt.sign(payload, secretKey, options);
  res.status(200).send({ auth: true, token });
};

module.exports = { register, login };
