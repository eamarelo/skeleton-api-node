
const ExampleController = require("./example/index.js");
const UpdateBoxController = require("./box/update");
const GetBoxByIdController = require("./box/getById");

const CreateTrackController = require("./track/create");
const GetProducteurDechet = require("./producteur_dechet/getProducteurDechet");

module.exports = {
  example: {
    ExampleController
  },
  box: {
    UpdateBoxController,
    GetBoxByIdController
  },
  track: {
    CreateTrackController,
  },
  producteurDechets: {
    GetProducteurDechet,
  },
}
