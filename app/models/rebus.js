const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const Rebus = connectAquarys.define('rebus', {
  // Model attributes are defined here
  id_track: DataTypes.INTEGER,
  id_type_rebus: DataTypes.INTEGER,
  id_produit: DataTypes.INTEGER,
  nb_rebus: DataTypes.INTEGER,
  path_dossier_photo: DataTypes.STRING,
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = Rebus