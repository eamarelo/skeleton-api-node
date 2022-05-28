const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('menu_maker', 'menu-maker', 'password', {
  host: 'localhost',
  dialect: "mysql"
});

module.exports = {sequelize}