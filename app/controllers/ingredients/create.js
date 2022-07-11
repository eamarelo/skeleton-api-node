// // Core
const Ingredients  = require("../../models/ingredients.js")
const Tampons = require("../tampon/create.js")
const tampons = new Tampons()


module.exports = class CreateIngredients {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
async middleware() {
    this.app.post(`/ingredients/create`, async (req, res) => {
        try {
            console.log(req.body)
            const ingredients =  Ingredients.build({
                nom: req.body.title,
                image: req.body.image,
                urlMamossa: req.body.urlMamossa, 
                prixMamossa: req.body.prixMamossa
            })
            await ingredients.save()
            
            await tampons.middleware({
                idMenu: req.body.idMenu,
                idIngredients: ingredients.dataValues.id,
                idUnites: 1
            })
            return res.status(200).json({
                code: 200,
                message: 'L\'ingrédient a bien été sauvegardé'
            })
        } catch (e) {
            console.error(`[ERROR] ingrédients/create -> ${e}`)
            return res.status(400).json({
                code: 400,
                message: 'Bad request'
            })
        }
    })

}

/**
 * Run
 */
run() {
    this.middleware()
}
}
