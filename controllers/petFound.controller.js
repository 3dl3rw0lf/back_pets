/******************************************************************************
 * Author: Gustavo Adolfo Arauz
 * version: 0.1.0
 * Date: 2024-07-12 16:01:16
 * Creación de los métodos del CRUD
 * Creation of CRUD methods
 ******************************************************************************/
const db = require('../db/db.js');

// TODO:modificar nombre de método sólo traer "Con Reporte de Pérdida"
const getAllPetsFound = (req, res) => {
  const sql =
    'SELECT p.pet_id, p.pet_name, tp.type_pets_description, po.owner_name, p.pet_age, p.pet_name, pr.description_report , p.pet_report_date, ps.status_description, p.pet_status_date, p.pet_latitud, p.pet_longitud FROM pets p LEFT JOIN types_pets tp ON p.pet_type_id = tp.type_id LEFT JOIN pet_owners po ON p.pet_owner_id = po.owner_id LEFT JOIN pet_report pr ON p.pet_report = pr.id_report LEFT JOIN pet_status ps ON p.pet_status = ps.status_id WHERE pr.description_report LIKE "Sin Reporte de Pérdida"';

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.json(result);
  });
};

const getPetFoundById = (req, res) => {
  const { petId } = req.params;
  const sql =
  'SELECT p.pet_id, p.pet_name, tp.type_pets_description, po.owner_name, pet_age, pr.description_report , pet_report_date, ps.status_description, pet_status_date, p.pet_latitud, p.pet_longitud  FROM pets p LEFT JOIN types_pets tp ON p.pet_type_id = tp.type_id LEFT JOIN pet_owners po ON p.pet_owner_id = po.owner_id LEFT JOIN pet_report pr ON p.pet_report = pr.id_report LEFT JOIN pet_status ps ON p.pet_status = ps.status_id WHERE pet_id = ?';

  db.query(sql, [petId], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length <= 0) {
      res.sendStatus(404).json({ message: 'Mascota no encontrada' });
    }
    res.json(result);
  });
};

// Funciona
const createdFoundPet = (req, res) => {
  const {
    petName,
    petTypeId,
    petAge,
    petOwnerId,
    petReport,
    petReportDate,
    petStatus,
    petStatusDate,
    petLatitud,
    petLongitud
  } = req.body;

  const sql =
    'INSERT INTO pets (pet_id, pet_name, pet_type_id, pet_age, pet_owner_id, pet_report, pet_report_date, pet_status, pet_status_date, pet_latitud, pet_longitud) VALUES( UUID(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(
    sql,
    [
      petName,
      petTypeId,
      petAge,
      petOwnerId,
      petReport,
      petReportDate,
      petStatus,
      petStatusDate,
      petLatitud,
      petLongitud
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json({ message: 'Mascota creada' });
    }
  );
};

const updatedFoundPet = (req, res) => {
  const { petId } = req.params;
  const {
    petName,
    petTypeId,
    petAge,
    petReport,
    petReportDate,
    petStatus,
    petStatusDate,
    petLatitud,
    petLongitud
  } = req.body;

  const sql =
    'UPDATE PETS SET pet_name = ?, pet_type_id = ?, pet_age = ?, pet_report = ?, pet_report_date = ?, pet_status = ?, pet_status_date = ?, pet_latitud = ? , pet_longitud = ? WHERE pet_id = ?';

  db.query(
    sql,
    [
      petName,
      petTypeId,
      petAge,
      petReport,
      petReportDate,
      petStatus,
      petStatusDate,
      petLatitud,
      petLongitud,
      petId
    ],
    (err, result) => {
      if (err) {
        throw err;
      }

      res.json({ message: 'Mascota actualizada correctamente' });
    }
  );
};

const deletedFoundPet = (req, res) => {
  const { petId } = req.params;

  const sql = 'DELETE FROM PETS WHERE pet_id = ?';

  db.query(sql, [petId], (err, result) => {
    if (err) {
      throw err;
    }

    res.json({ message: 'Mascota borrada correctamente' });
  });
};

module.exports = {
  getAllPetsFound,
  getPetFoundById,
  createdFoundPet,
  updatedFoundPet,
  deletedFoundPet
};
