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
            const ingredients =  Ingredients.build({
                nom: req.body.nom,
                imagePath: req.body.imagePath,
                idProduitsRef: req.body.idProduitsRef
            })
            await ingredients.save()
            
            await tampons.middleware({
                idRecettes: req.body.idRecettes,
                idIngrédients: ingredients.dataValues.id,
                idUnités: req.body.idUnités,
                idUstensiles: req.body.idUstensiles,
                idProduits: req.body.idProduits
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
