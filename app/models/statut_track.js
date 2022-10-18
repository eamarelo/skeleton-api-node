const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const StatutTrack = connectAquarys.define('statut_track', {
  // Model attributes are defined here
  libelle_track: DataTypes.STRING

}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = StatutTrack