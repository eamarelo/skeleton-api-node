
const ExampleController = require("./example/index.js")
const CreateMenus = require("./menus/create.js")
const GetMenus = require("./menus/get.js")
const GetById = require("./menus/byId.js")
const DestroyById = require("./menus/destroy.js")

const CreateRecettes = require("./recettes/create.js")
const GetRecettes = require("./recettes/get.js")
const GetRecettesById = require("./recettes/byId.js")
const DestroyRecettes = require("./recettes/destroy.js")

const CreateProduits = require("./produits/create.js")
const GetProduits = require("./produits/get.js")
const GetProduitsById = require("./produits/byId.js")
const DestroyProduits = require("./produits/destroy.js")

const CreateUstensiles = require("./ustensiles/create.js")
const GetAllUstensiles = require("./ustensiles/get.js")
const GetUstensilesById = require("./ustensiles/byId.js")
const DestroyUstensiles = require("./ustensiles/destroy.js")

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
    CreateRecettes,
    GetRecettes,
    GetRecettesById,
    DestroyRecettes
  },
  ingredients: {
    CreateIngredients,
    GetIngredients,
    GetIngredientsById,
    DestroyIngredients
  },
  produits: {
    CreateProduits,
    GetProduits,
    GetProduitsById,
    DestroyProduits
  },
  ustensiles: {
    CreateUstensiles,
    GetAllUstensiles,
    GetUstensilesById,
    DestroyUstensiles
  },
  tampon: {
    TamponByIdMenu
  }
}
