const { Sequelize, DataTypes } = require('sequelize');
const { connectNewProd } = require("../db.js")

const ProducteurDechets = connectNewProd.define('producteurs_dechets', {
  // Model attributes are defined here
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
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

ProducteurDechets.associate = function (models) {
    // Association
    ProducteurDechets.hasMany(models.Track, { foreignKey: 'id_producteur_dechet', as: 'track' });
  }
  

module.exports = ProducteurDechets