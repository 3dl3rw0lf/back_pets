const mysql = require('mysql2');

const config = require('../src/config');

// 2.- Configuramos conexión a la BD
const connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.pass,
  port: config.port_db,
});

// conexión
connection.connect((err) => {
  // En caso de error
  if (err) {
    console.error(`Error de conexión con el servidor 01: ${err}`);
    return;
  }

  // En caso OK
  console.log(`Estado de conexión: CONECTADA`);

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
    console.log(`Base de Datos: CREADA/EXISTENTE`);

    // TABLA
    connection.changeUser({ database: 'pets_lost' }, (err) => {
      if (err) {
        console.error(`Error al cambiar a la Base de Datos pets_lost: ${err}`);
        return;
      }
      // Generamos la consulta para crear la tabla
      const createTableQuery = `
                    CREATE TABLE IF NOT EXISTS pets (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        pet_name VARCHAR(255) NOT NULL,
                        pet_type VARCHAR(255) NOT NULL,
                        pet_age INT NOT NULL
                    );
                `;

      connection.query(createTableQuery, (err, result) => {
        // En caso de error
        if (err) {
          console.error(`Error al crear la tabla ${err}`);
          return;
        }

        // Éxito
        console.log(`Tabla CREADA`);
      });
    });
  });
});

module.exports = connection;
