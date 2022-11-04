const { Sequelize, DataTypes } = require('sequelize');
const { connectContrat } = require("../db.js");

const Produits = connectContrat.define('produits', {
  // Model attributes are defined here
id_nature_produit: {
    type: DataTypes.INTEGER
},
code_produit: {
    type: DataTypes.STRING
},
nom: {
    type: DataTypes.STRING
},
id_dechet: {
    type: DataTypes.INTEGER
},
id_contenant: {
    type: DataTypes.INTEGER
},
id_prestataire: {
    type: DataTypes.INTEGER
},
description: {
    type: DataTypes.STRING
},
if_ponctuel: {
    type: DataTypes.BOOLEAN
}
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = Produits