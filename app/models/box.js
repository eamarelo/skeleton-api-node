'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Box.init({
    id_producteur_dechet: DataTypes.INTEGER,
    date_mise_en_service: DataTypes.DATE,
    date_fin_service: DataTypes.DATE,
    id_statut_box: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Box',
  });
  return Box;
};