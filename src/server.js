/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-17 20:09:40
 * Creación del servidor
 * Creation of the server
 ******************************************************************************/
const express = require('express');
const path = require('path');

const config = require('../config/config');

const app = express();

const userRoutes = require('../routes/user.routes.js');
const petLostRoutes = require('../routes/petLost.routes.js');
const petFoundRoutes = require('../routes/petFound.routes.js');

const PORT = config.port_server || 3000;

app.use(express.json());

// Servir archivos estáticos del directorio frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Usuarios
app.use('/users', userRoutes);

// Mascotas Perdidas
app.use('/petsLost', petLostRoutes);

// Mascotas Encontradas
app.use('/petsFound', petFoundRoutes);

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
