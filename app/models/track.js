'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Track.init({
    id_box: DataTypes.INTEGER,
    id_producteur_dechet: DataTypes.INTEGER,
    date_heure: DataTypes.DATE,
    id_zone_lavage: DataTypes.INTEGER,
    id_statut_track: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Track',
  });
  return Track;
};