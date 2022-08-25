// Dependencies
const express = require("express")
const routes = require('./controllers/routes.js')
const bodyParser =  require('body-parser')
var cors = require('cors')
// Core


/**
 * Server
 */
module.exports = class Server {
  constructor() {
    this.app = express()
    this.run()
  }

  /**
   * Middleware
   */
  middleware() {
    this.app.use(bodyParser.urlencoded({
      'extended': true
    }))
    this.app.use(bodyParser.json())
    this.app.use(cors())
  }

  /**
   * Routes
   */
  routes()  {

    //UNCOMMENT BELOW TO TEST

    // new routes.example.ExampleController(this.app)
    new routes.menus.CreateMenus(this.app)
    new routes.menus.GetMenus(this.app)
    new routes.menus.GetById(this.app)
    new routes.menus.DestroyById(this.app)

    new routes.recettes.CreateRecettes(this.app)
    new routes.recettes.GetRecettes(this.app)
    new routes.recettes.GetRecettesById(this.app)
    new routes.recettes.DestroyRecettes(this.app)

    new routes.ingredients.CreateIngredients(this.app)
    new routes.ingredients.GetIngredients(this.app)
    new routes.ingredients.GetIngredientsById(this.app)
    new routes.ingredients.DestroyIngredients(this.app)

    new routes.ustensiles.CreateUstensiles(this.app)
    new routes.ustensiles.GetAllUstensiles(this.app)
    new routes.ustensiles.GetUstensilesById(this.app)
    new routes.ustensiles.DestroyUstensiles(this.app)

    new routes.produits.CreateProduits(this.app)
    new routes.produits.GetProduits(this.app)
    new routes.produits.GetProduitsById(this.app)
    new routes.produits.DestroyProduits(this.app)

    new routes.tampon.TamponByIdMenu(this.app)

    // If route not exist
    this.app.use((req, res) => {
      res.status(404).json({
        code: 404,
        message: "Not Found"
      })
    })
  }

  /**
   * Security
   */
  security() {

  }

  /**
   * Run
   */
  run() {
    try {
      this.security()
      this.middleware()
      this.routes()
      const port = process.env.PORT || 4000
      this.app.listen(port)
      console.log(`Your port is ${port}`)
    } catch (e) {
      console.error(`[ERROR] Server -> ${e}`)
    }
  }
}
