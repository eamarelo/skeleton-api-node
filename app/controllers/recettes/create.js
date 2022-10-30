// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Recettes  = require("../../models/recettes.js")
const { recettes } = require("../routes.js")
const multer = require("multer");
const upload = multer({ dest: './public/recettes/uploads/' })


module.exports = class CreateMenus {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
async middleware() {
    this.app.post(`/recettes/create`, upload.single('uploaded_file'),  async (req, res) => {
        try {
            const recettes =  Recettes.build({
                nom: req.body.title,
                description: req.body.description,
                procede: req.body.procede,
                ImagePath: req.body.ImagePath,
                portions: req.body.portions,
                prepTime: req.body.prepTime,
                cookTime: req.body.cookTime,
                duree: req.body.duree,
                difficultee: req.body.difficultee, 
                cout: req.body.cout,
                idCategorieRecettes: req.body.idCategorieRecettes
            })
            await recettes.save()
            return res.status(200).json({
                code: 200,
                message: 'La recette a bien été sauvegardé'
            })
        } catch (e) {
            console.error(`[ERROR] recettes/create -> ${e}`)
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
