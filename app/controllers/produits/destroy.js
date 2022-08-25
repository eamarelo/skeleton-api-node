// // Core
const Produits  = require("../../models/produits.js")

module.exports = class DestroyProduits {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.delete(`/produits/destroy`, async (req, res) => {
        try {
            await Produits.destroy({
                where: {
                  id: req.query.id
                }
            });
            return res.status(200).json({
                code: 200,
                message: 'Le produit a bien été supprimé'
            })
        } catch (e) {
            console.error(`[ERROR] produits/getAll -> ${e}`)
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
