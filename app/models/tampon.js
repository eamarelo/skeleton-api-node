const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../db.js")

const Tampons = sequelize.define('tampons', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idMenu: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  idIngrédients: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  idUnités: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  }
}, {
  timestamps: false,
  // Other model options go here
});

module.exports = Tampons