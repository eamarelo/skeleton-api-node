// // Core
const Ingredients  = require("../../models/ingredients.js")

module.exports = class DestroyIngredients {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.delete(`/ingredients/destroy`, async (req, res) => {
        try {
            await Ingredients.destroy({
                where: {
                  id: req.query.id
                }
            });
            return res.status(200).json({
                code: 200,
                message: 'L\'ingrédient a bien été supprimé'
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
