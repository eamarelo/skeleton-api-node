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

ZoneLavage.associate = function (models) {
  // Association
  ZoneLavage.hasMany(models.Track, { foreignKey: 'id_zone_lavage', as: 'track' });
}

module.exports = ZoneLavage