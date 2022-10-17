'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatutBox extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatutBox.init({
    libelle_statut: DataTypes.STRING
}, {
    sequelize,
    modelName: 'StatutBox',
  });
  return StatutBox;
};