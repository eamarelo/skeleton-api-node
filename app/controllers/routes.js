
const ExampleController = require("./example/index.js")
const CreateMenus = require("./menus/create.js")
const GetMenus = require("./menus/get.js")
const GetById = require("./menus/byId.js")

module.exports = {
  //UNCOMMENT BELOW TO TEST

  // example: {
  //   ExampleController
  // },
  menus: {
    CreateMenus,
    GetMenus,
    GetById
  }
}
