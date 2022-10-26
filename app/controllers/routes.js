
const ExampleController = require("./example/index.js");
const UpdateBoxController = require("./box/update");
const CreateTrackController = require("./track/create");
const GetProducteurDechet = require("./producteur_dechet/getProducteurDechet");

module.exports = {
  example: {
    ExampleController
  },
  box: {
    UpdateBoxController
  },
  track: {
    CreateTrackController,
  },
  producteurDechets: {
    GetProducteurDechet,
  },
}
