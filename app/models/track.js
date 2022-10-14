'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Balance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Balance.init({
    id_box: DataTypes.INTEGER,
    id_producteur_dechet: DataTypes.INTEGER,
    date_heure: DataTypes.DATE,
    id_zone_lavage: DataTypes.INTEGER,
    id_statut_track: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Balance',
  });
  return Balance;
};