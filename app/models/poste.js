'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poste extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Poste.init({
    nom_poste: DataTypes.STRING,
    routing: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Poste',
  });
  return Poste;
};