// // Core
const Ingredients  = require("../../models/ingredients.js")

module.exports = class GetIngredients {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.get(`/ingredients/getAll`, async (req, res) => {
        try {
            const ingredients = await Ingredients.findAll();
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
