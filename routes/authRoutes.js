const express = require('express');

const authController = require('../controllers/authControllers');

const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).send(`hola ${req.userId} - ${req.username}`);
});

module.exports = router;
