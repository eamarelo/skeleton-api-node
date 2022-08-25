// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Ustensiles  = require("../../models/ustensiles.js")
const { ustensiles } = require("../routes.js")

module.exports = class CreateUstensiles {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
async middleware() {
    this.app.post(`/ustensiles/create`, async (req, res) => {
        try {
            const ustensiles =  Ustensiles.build({
                nom: req.body.nom,
                ImagePath: req.body.ImagePath,
                urlMamossa: req.body.urlMamossa,
                prixMamossa: req.body.prixMamossa
            })
            await ustensiles.save()
            return res.status(200).json({
                code: 200,
                message: 'L\'ustensile a bien été sauvegardé'
            })
        } catch (e) {
            console.error(`[ERROR] ustensiles/create -> ${e}`)
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
