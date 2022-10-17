'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProducteurDechets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProducteurDechets.init({
    code_producteur_dechets: {
        type: DataTypes.INTEGER
    },
    id_raison_sociale: {
        type: DataTypes.CHAR
    },
    id_site: {
        type: DataTypes.STRING
    },
    id_site_production: {
        type: DataTypes.STRING
    },
    id_type_producteur_dechets: {
        type: DataTypes.STRING
    },
    nom: {
        type: DataTypes.STRING
    },
    taille_entreprise: {
        type: DataTypes.STRING
    },
    nombre_employes: {
        type: DataTypes.STRING
    },
    type_tri: {
        type: DataTypes.STRING
    },
    dechet_trier_av: {
        type: DataTypes.BOOLEAN
    },
    couleur_recyclable: {
        type: DataTypes.STRING
    },
    couleur_dib: {
        type: DataTypes.STRING
    },
    societe_nettoyage: {
        type: DataTypes.STRING
    },
    precedente_societe_tri: {
        type: DataTypes.STRING
    },
    niveau_importance: {
        type: DataTypes.STRING
    },
    chantier_prod: {
        type: DataTypes.BOOLEAN
    },
    user_creation: {
        type: DataTypes.STRING
    },
    date_creation: {
        type: DataTypes.STRING
    },
    actif: {
        type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'ProducteurDechets',
  });
  return ProducteurDechets;
};