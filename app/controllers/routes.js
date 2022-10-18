
const ExampleController = require("./example/index.js")
const GetProducteurDechet = require("./producteur_dechet/getProducteurDechet.js")

module.exports = {
  example: {
    ExampleController
  },
  producteurDechets: {
    GetProducteurDechet
  }
}
