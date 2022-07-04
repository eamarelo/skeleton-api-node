const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../db.js")

const Ingredients = sequelize.define('ingredients', {
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
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  urlMamossa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prixMamossa: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  // Other model options go here
});

module.exports = Ingredients