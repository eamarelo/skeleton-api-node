'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatutTrack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatutTrack.init({
    libelle_track: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatutTrack',
  });
  return StatutTrack;
};