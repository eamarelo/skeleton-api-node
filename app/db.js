const { Sequelize } = require('sequelize');

const connectNewProd = new Sequelize('New_Prod', 'eamarelo', 'Gandia2021', {
  dialect: 'mssql',
  host: 'green-biboard',
  dialectOptions: {
    options: {
      instanceName: 'BIPREPROD'
    }
  }
})

const connectAquarys = new Sequelize('Aquarys', 'eamarelo', 'Gandia2021', {
  dialect: 'mssql',
  host: 'green-biboard',
  dialectOptions: {
    options: {
      instanceName: 'BIPREPROD'
    }
  }
})
module.exports = {connectNewProd, connectAquarys}