'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colisage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Colisage.init({
    id_track: DataTypes.INTEGER,
    id_produit: DataTypes.INTEGER,
    nb_add: DataTypes.INTEGER,
    is_ready: DataTypes.BOOLEAN
}, {
    sequelize,
    modelName: 'Colisage',
  });
  return Colisage;
};