const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../db.js")

const Menus = sequelize.define('menus', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duree: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  difficultee: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cout: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  // Other model options go here
});

module.exports = Menus