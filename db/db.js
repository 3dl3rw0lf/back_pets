const mysql = require('mysql2');

const config = require('../config/config');

// 2.- Configuramos conexión a la BD
const connection = mysql.createConnection({
  host: config.env.MYSQL_ADDON_HOST,
  user: config.env.MYSQL_ADDON_USER,
  password: config.env.MYSQL_ADDON_PASSWORD,
  port: config.env.MYSQL_ADDON_PORT,
  database: config.env.MYSQL_ADDON_DB
});

// conexión
connection.connect((err) => {
  // En caso de error
  if (err) {
    console.error(`Error de conexión con el servidor 01: ${err}`);
    return;
  }

  // En caso OK
  console.log('Estado de conexión: CONECTADA');

  // Creamos una consulta
  const sqlCreateDB = 'CREATE DATABASE IF NOT EXISTS pets_lost';

  // Pasamos la consulta a la DB
  connection.query(sqlCreateDB, (err, result) => {
    // En caso de error
    if (err) {
      console.error(`Error de conexión con el servidor 02: ${err}`);
      return;
    }
    // Éxito
    console.log('Base de Datos: CREADA/EXISTENTE');

    // TABLA
    connection.changeUser({ database: 'pets_lost' }, (err) => {
      if (err) {
        console.error(`Error al cambiar a la Base de Datos pets_lost: ${err}`);
        return;
      }
      // Generamos la consulta para crear la tabla
      const createTableQuery = `
                    CREATE TABLE IF NOT EXISTS pets (
                      pet_id bigint unsigned NOT NULL,
                      pet_name varchar(255) NOT NULL,
                      pet_type_id varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                      pet_age int NOT NULL,
                      pet_owner_id varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
                      pet_report bigint unsigned DEFAULT NULL,
                      pet_report_date timestamp NOT NULL,
                      pet_status bigint unsigned DEFAULT NULL,
                      pet_status_date timestamp NOT NULL,
                      PRIMARY KEY (pet_id),
                      KEY pets_pet_owners_FK (pet_owner_id),
                      KEY pets_types_pets_FK (pet_type_id),
                      KEY pets_pet_status_FK (pet_status),
                      KEY pets_pet_report_FK (pet_report),
                      CONSTRAINT pets_pet_owners_FK FOREIGN KEY (pet_owner_id) REFERENCES pet_owners (owner_id) ON DELETE CASCADE ON UPDATE CASCADE,
                      CONSTRAINT pets_pet_report_FK FOREIGN KEY (pet_report) REFERENCES pet_report (id_report) ON DELETE CASCADE ON UPDATE CASCADE,
                      CONSTRAINT pets_pet_status_FK FOREIGN KEY (pet_status) REFERENCES pet_status (status_id) ON DELETE CASCADE ON UPDATE CASCADE,
                      CONSTRAINT pets_types_pets_FK FOREIGN KEY (pet_type_id) REFERENCES types_pets (type_id) ON DELETE CASCADE ON UPDATE CASCADE
                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
                `;

      connection.query(createTableQuery, (err, result) => {
        // En caso de error
        if (err) {
          console.error(`Error al crear la tabla ${err}`);
          return;
        }

        // Éxito
        console.log('Tabla CREADA o EXISTENTE');
      });
    });
  });
});

module.exports = connection;
