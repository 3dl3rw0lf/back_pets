/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-06-24 19:22:30
 * Creación de los métodos del CRUD
 * Creation of CRUD methods
 ******************************************************************************/
const db = require('../db/db.js');

const getAllPets = (req, res) => {
  const sql = 'SELECT * FROM PETS';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
};

const getPetById = (req, res) => {
  const { id } = req.params;

  const sql = 'SELECT * FROM PETS WHERE ID = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
};

const createdPet = (req, res) => {
  const { petName, petType, petAge } = req.body;

  const sql =
    'INSERT INTO PETS (pet_name, pet_type, pet_age) VALUES ( ?, ?, ?)';

  db.query(sql, [petName, petType, petAge], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ message: 'Mascoto creada' });
  });
};

const updatedPet = (req, res) => {
  const { id } = req.params;
  const { petName, petType, petAge } = req.body;

  const sql =
    'UPDATE PETS SET pet_name = ?, pet_type = ?, pet_age = ? WHERE ID = ?';

  db.query(sql, [petName, petType, petAge, id], (err, result) => {
    if (err) {
      throw err;
    }

    res.json({ message: 'Mascota actualizada correctamente' });
  });
};

const deletedPet = (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM PETS WHERE ID = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }

    res.json({ message: 'Mascota borrada correctamente' });
  });
};

module.exports = {
  getAllPets,
  getPetById,
  createdPet,
  updatedPet,
  deletedPet,
};
