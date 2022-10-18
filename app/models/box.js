const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const Box = connectAquarys.define('box', {
  id_producteur_dechet: DataTypes.INTEGER,
  date_mise_en_service: DataTypes.DATE,
  date_fin_service: DataTypes.DATE,
  id_statut_box: DataTypes.INTEGER
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = Box