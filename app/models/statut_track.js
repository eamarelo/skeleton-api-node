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

StatutTrack.associate = function (models) {
  // Association
  StatutTrack.hasMany(models.Track, { foreignKey: 'id_statut_track', as: 'track' });
}

module.exports = StatutTrack