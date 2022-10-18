const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const Track = connectAquarys.define('track', {
  // Model attributes are defined here
  id_box: DataTypes.INTEGER,
  id_producteur_dechet: DataTypes.INTEGER,
  date_heure: DataTypes.DATE,
  id_zone_lavage: DataTypes.INTEGER,
  id_statut_track: DataTypes.INTEGER
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = Track