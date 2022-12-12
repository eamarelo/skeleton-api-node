const { Sequelize, DataTypes } = require('sequelize');
const { connectAquarys } = require("../db.js")

const Box = connectAquarys.define('box', {
  id_producteur_dechet: DataTypes.INTEGER,
  date_mise_en_service: DataTypes.DATEONLY,
  date_fin_service: DataTypes.DATEONLY,
  id_statut_box: DataTypes.INTEGER
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

Box.associate = function (models) {
  // Association
  Box.hasMany(models.Track, { foreignKey: 'id_box', as: 'track' });
}

module.exports = Box