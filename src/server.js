/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-17 20:09:40
 * Creación del servidor
 * Creation of the server
 ******************************************************************************/
const express = require('express');
const cors = require('cors');
const config = require('../config/config');

const app = express();

const petRoutes = require('../routes/petRoutes');

const PORT = config.port_server || 3000;

app.use(cors());
app.use(express.json());

// Mascotas
app.use('/pets', petRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
