// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Produits  = require("../../models/produits.js")
const { produits } = require("../routes.js")

module.exports = class CreateProduits{
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
async middleware() {
    this.app.post(`/produits/create`, async (req, res) => {
        try {
            const produits =  Produits.build({
                nom: req.body.nom,
                ImagePath: req.body.ImagePath,
                urlMamossa: req.body.urlMamossa,
                prixMamossa: req.body.prixMamossa,
                prixAchatKiloUniteHT: req.body.prixAchatKiloUniteHT,
                inStock: req.body.inStock,
                perissable: req.body.perissable, 
                toBuy: req.body.toBuy
            })
            await produits.save()
            return res.status(200).json({
                code: 200,
                message: 'Le produit a bien été sauvegardé'
            })
        } catch (e) {
            console.error(`[ERROR] produits/create -> ${e}`)
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
