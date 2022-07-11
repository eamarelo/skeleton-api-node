
const ExampleController = require("./example/index.js")
const CreateMenus = require("./menus/create.js")
const GetMenus = require("./menus/get.js")
const GetById = require("./menus/byId.js")
const DestroyById = require("./menus/destroy.js")

const CreateIngredients = require("./ingredients/create.js")
const GetIngredients = require("./ingredients/get.js")
const GetIngredientsById = require("./ingredients/byId.js")
const DestroyIngredients = require("./ingredients/destroy.js")
const TamponByIdMenu = require("./tampon/byIdMenu.js")


module.exports = {
  //UNCOMMENT BELOW TO TEST

  // example: {
  //   ExampleController

  // }

  menus: {
    CreateMenus,
    GetMenus,
    GetById,
    DestroyById
  },
  ingredients: {
    CreateIngredients,
    GetIngredients,
    GetIngredientsById,
    DestroyIngredients
  },
  tampon: {
    TamponByIdMenu
  }
}
