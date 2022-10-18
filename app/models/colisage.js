const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const Colisage = connectAquarys.define('colisage', {
  id_track: DataTypes.INTEGER,
  id_produit: DataTypes.INTEGER,
  nb_add: DataTypes.INTEGER,
  is_ready: DataTypes.BOOLEAN
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = Colisage