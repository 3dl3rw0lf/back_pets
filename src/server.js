/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-17 20:09:40
 * Creación del servidor
 * Creation of the server
 ******************************************************************************/
const express = require('express');
const config = require('./config');

const app = express();

const petRoutes = require('../routes/petRouter');

const PORT = config.port_server;

app.use(express.json());

/* 
// método get
app.get('/', (req, res) => {
  res.send('Hello Pets');
});
app.get('/protected', (req, res) => {});

// método post
app.post('/login', (req, res) => {
  res.json({ user: '3dl3rw0lf' });
});
app.post('/register', (req, res) => {
  res.json({ user: 'wgeni@' });
});
app.post('/logout', (req, res) => {});
 */

// Mascotas
app.use('/pets', petRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
