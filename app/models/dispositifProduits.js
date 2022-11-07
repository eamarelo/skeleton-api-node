const { Sequelize, DataTypes } = require('sequelize');
const { connectContrat } = require("../db.js");
const Produits = require('./produits.js');

const DispositifProduits = connectContrat.define('dispositifs_produits', {
  // Model attributes are defined here
id_produit: {
    type: DataTypes.INTEGER
},
id_dispositif: {
    type: DataTypes.INTEGER
},
nb_produit: {
    type: DataTypes.INTEGER
},
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = DispositifProduits