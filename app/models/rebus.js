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
    id_track: DataTypes.INTEGER,
    id_type_rebus: DataTypes.INTEGER,
    id_produit: DataTypes.INTEGER,
    nb_rebus: DataTypes.INTEGER,
    path_dossier_photo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Balance',
  });
  return Balance;
};