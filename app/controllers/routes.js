
const ExampleController = require("./example/index.js")
const CreateMenus = require("./menus/create.js")
const GetMenus = require("./menus/get.js")
const GetById = require("./menus/byId.js")
const DestroyById = require("./menus/destroy.js")

const CreateRecettes = require("./recettes/create.js")

const CreateIngredients = require("./ingredients/create.js")
const GetIngredients = require("./ingredients/get.js")
const GetIngredientsById = require("./ingredients/byId.js")
const DestroyIngredients = require("./ingredients/destroy.js")
const TamponByIdMenu = require("./tampon/byIdMenu.js")


module.exports = {
  menus: {
    CreateMenus,
    GetMenus,
    GetById,
    DestroyById
  },
  recettes: {
    CreateRecettes
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
