'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ZoneLavage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ZoneLavage.init({
    nom_zone_lavage: DataTypes.STRING,
    id_adresse: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ZoneLavage',
  });
  return ZoneLavage;
};