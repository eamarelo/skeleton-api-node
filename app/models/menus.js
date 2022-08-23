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
  prix: {
    type: DataTypes.FLOAT
    // allowNull defaults to true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  // Other model options go here
});

module.exports = Menus