const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URI, {
  dialect: 'postgres',
  logging: console.log,
  dialectOptions: {
    searchPath: ['EASY_MARKET']
  }
});

sequelize.sync({ force: false })
  .then(() => console.log("Tablas sincronizadas en el esquema EASY_MARKET"))
  .catch(error => console.error("Error al sincronizar modelos:", error));


sequelize.authenticate()
  .then(() => {
    console.log('Conexión a PostgreSQL establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
