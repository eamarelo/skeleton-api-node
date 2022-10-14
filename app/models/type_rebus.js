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
    nom_type_rebus: DataTypes.STRING,
    path_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Balance',
  });
  return Balance;
};