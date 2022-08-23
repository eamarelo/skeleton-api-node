const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../db.js")

const Recettes = sequelize.define('recettes', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  procede: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ImagePath: {
    type: DataTypes.STRING,
    allowNull: false
  },
  portions: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  prepTime: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cookTime: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  duree: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  difficultee: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cout: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idCategorieRecettes: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  timestamps: false,
  // Other model options go here
});

module.exports = Recettes