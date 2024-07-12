/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-24 19:12:50
 * Creación del Enrutador
 * Creation of the Router
 ******************************************************************************/
const express = require('express');
const cors = require('cors');
const routerFound = express.Router();
routerFound.use(cors());

const petFoundController = require('../controllers/petFound.controller');

// Mascotas Perdidas
routerFound.get('/', petFoundController.getAllPetsFound);
routerFound.get('/:petId', petFoundController.getPetFoundById);
routerFound.post('/', petFoundController.createdFoundPet);
routerFound.put('/:petId', petFoundController.updatedFoundPet);
routerFound.delete('/:petId', petFoundController.deletedFoundPet);

module.exports = routerFound;
