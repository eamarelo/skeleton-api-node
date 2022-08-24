const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require("../db.js")

const Produits = sequelize.define('produits', {
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
  ImagePath: {
    type: DataTypes.STRING,
    allowNull: false
  },
  urlMamossa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prixMamossa: {
    type: DataTypes.INTEGER
    // allowNull defaults to true
  },
  prixAchatKiloUniteHT: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  inStock: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  perissable: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  toBuy: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
}, {
  timestamps: false,
  // Other model options go here
});

module.exports = Produits