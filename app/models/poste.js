const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const Poste = connectAquarys.define('poste', {
  // Model attributes are defined here
  nom_poste: DataTypes.STRING,
  routing: DataTypes.STRING,
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = Poste