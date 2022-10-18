const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const ZoneLavage = connectAquarys.define('zone_lavage', {
  // Model attributes are defined here
  nom_zone_lavage: DataTypes.STRING,
  id_adresse: DataTypes.INTEGER,
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = ZoneLavage