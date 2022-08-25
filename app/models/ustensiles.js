const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../db.js")

const Ustensiles = sequelize.define('ustensiles', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  ImagePath: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  urlMamossa: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  prixMamossa: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  }
}, {
  timestamps: false,
  // Other model options go here
});

module.exports = Ustensiles