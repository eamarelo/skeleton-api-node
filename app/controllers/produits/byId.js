// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Produits  = require("../../models/produits.js")
const { produits } = require("../routes.js")

module.exports = class GetProduitsById {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.get(`/produits/byId`, async (req, res) => {
        try {
            const produits = await Produits.findByPk(req.query.id);
            return res.status(200).json({
                code: 200,
                data: produits
            })
        } catch (e) {
            console.error(`[ERROR] produits/byId -> ${e}`)
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
