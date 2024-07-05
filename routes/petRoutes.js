/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-24 19:12:50
 * Creación del Enrutador
 * Creation of the Router
 ******************************************************************************/
const express = require('express');

const router = express.Router();

const petController = require('../controllers/petController');

// Mascotas
router.get('/', petController.getAllPets);

router.get('/:petId', petController.getPetById);

router.post('/', petController.createdPet);

router.put('/:petId', petController.updatedPet);

router.delete('/:petId', petController.deletedPet);

module.exports = router;
