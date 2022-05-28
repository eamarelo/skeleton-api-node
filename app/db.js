const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apv', 'root', 'password', {
  host: 'localhost',
  dialect: "mysql"
});

module.exports = {sequelize}