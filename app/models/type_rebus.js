const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const TypeRebus = connectAquarys.define('type_rebus', {
  // Model attributes are defined here
  nom_type_rebus: DataTypes.STRING,
  path_image: DataTypes.STRING
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = TypeRebus