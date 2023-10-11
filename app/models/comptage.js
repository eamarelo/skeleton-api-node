const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const Comptage = connectAquarys.define('comptage', {
  // Model attributes are defined here
  id_track: DataTypes.INTEGER,
  id_produit: DataTypes.INTEGER,
  nb_reel: DataTypes.INTEGER,
  has_comptage: DataTypes.BOOLEAN
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = Comptage