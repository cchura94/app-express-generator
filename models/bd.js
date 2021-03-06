const Sequelize = require("sequelize");

const seq = new Sequelize('prueba2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });

module.exports = seq;