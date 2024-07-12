/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-24 19:12:50
 * Creación del Enrutador
 * Creation of the Router
 ******************************************************************************/
const express = require('express');
const cors = require('cors');
const routerLost = express.Router();
routerLost.use(cors());

const petController = require('../controllers/petLost.controller');

// Mascotas Perdidas
routerLost.get('/', petController.getAllPetsLost);
routerLost.get('/:petId', petController.getPetLostById);
routerLost.post('/', petController.createdLostPet);
routerLost.put('/:petId', petController.updatedLostPet);
routerLost.delete('/:petId', petController.deletedLostPet);

module.exports = routerLost;
