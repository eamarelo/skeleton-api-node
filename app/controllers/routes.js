
const ExampleController = require("./example/index.js");
const UpdateBoxController = require("./box/update");
const CreateTrackController = require("./track/create");

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
}
