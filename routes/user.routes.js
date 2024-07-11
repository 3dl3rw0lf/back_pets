const express = require('express');

const authControllers = require('../controllers/auth.controller');

const authMiddleware = require('../middlewares/auth.middlewares');

const router = express.Router();

router.post('/register', authControllers.register);

router.post('/login', authControllers.login);

router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json(`Hola usuario ${req.userId} - ${req.username}`);
});

module.exports = router;
