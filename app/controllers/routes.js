
const ExampleController = require("./example/index.js");
const UpdateBoxController = require("./box/update");
const GetBoxByIdController = require("./box/getById");

const CreateComptageController = require("./comptage/create");

const CreateColisageController = require("./colisage/create");

const CreateRebusController = require("./rebus/create");

const GetAllTypeRebus = require("./rebus/getTypeRebus");

const GetPosteByIdController = require("./poste/getById");

const CreateTrackController = require("./track/create");
const GetProducteurDechet = require("./producteur_dechet/getProducteurDechet");

const GetProductByIdProducteurDechet = require("./products/getProductByIdProducteurDechet");


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
  poste: {
    GetPosteByIdController
  },
  comptage: {
    CreateComptageController
  },
  colisage: {
    CreateColisageController
  },
  rebus: {
    CreateRebusController,
    GetAllTypeRebus
  },
  produits: {
    GetProductByIdProducteurDechet
  }
}
