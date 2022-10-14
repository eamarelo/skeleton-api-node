'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comptage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comptage.init({
    id_track: DataTypes.INTEGER,
    id_produit: DataTypes.INTEGER,
    nb_reel: DataTypes.INTEGER,
    has_comptage: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Comptage',
  });
  return Comptage;
};