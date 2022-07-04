// // Core
const Ingredients  = require("../../models/ingredients.js")

module.exports = class GetIngredientsById {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.get(`/ingredients/byId`, async (req, res) => {
        try {
            const ingredients = await Ingredients.findByPk(req.query.id);
            return res.status(200).json({
                code: 200,
                data: ingredients
            })
        } catch (e) {
            console.error(`[ERROR] menus/getAll -> ${e}`)
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
