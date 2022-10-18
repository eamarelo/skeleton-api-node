const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const StatutBox = connectAquarys.define('statut_box', {
  // Model attributes are defined here
  libelle_statut: DataTypes.STRING
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = StatutBox