const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'SuperUsuario',
    password: 'Javier117',
    database: 'life-up-db'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = connection;