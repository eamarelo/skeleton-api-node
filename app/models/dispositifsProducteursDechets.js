const { Sequelize, DataTypes } = require('sequelize');
const { connectContrat } = require("../db.js")
const DispositifProduits = require('./dispositifProduits.js');
const Produits = require('./produits.js');

const DispositifsProducteursDechets = connectContrat.define('dispositifs_producteurs_dechets', {
  // Model attributes are defined here
id_dispositif: {
    type: DataTypes.INTEGER,
    references: {
      model: DispositifProduits, // 'Movies' would also work
      key: 'id'
    }
},
id_producteur_dechets: {
    type: DataTypes.INTEGER
}
}, {
  timestamps: false,
  freezeTableName: true
  // Other model options go here
});

module.exports = DispositifsProducteursDechets