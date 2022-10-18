const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const User = connectAquarys.define('user', {
  // Model attributes are defined here
  id_poste: DataTypes.INTEGER,
  identifiant: DataTypes.STRING,
  mdp: DataTypes.STRING,
  id_zone_lavage: DataTypes.INTEGER   
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = User