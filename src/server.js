/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-17 20:09:40
 * Creación del servidor
 * Creation of the server
 ******************************************************************************/
const express = require('express');

const config = require('../config/config');

const app = express();

const userRoutes = require('../routes/user.routes.js');
const petLostRoutes = require('../routes/petLost.routes.js');
const petFoundRoutes = require('../routes/petFound.routes.js');

const PORT = config.port_server || 3000;

app.use(express.json());

// Usuarios
app.use('/users', userRoutes);

// Mascotas Perdidas
app.use('/petsLost', petLostRoutes);

// Mascotas Encontradas
app.use('/petsFound', petFoundRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
