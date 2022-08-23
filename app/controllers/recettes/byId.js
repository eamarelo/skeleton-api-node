// // Core
const Recettes  = require("../../models/recettes.js")

module.exports = class GetRecettesById {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.get(`/recettes/byId`, async (req, res) => {
        try {
            const recettes = await Recettes.findByPk(req.query.id);
            return res.status(200).json({
                code: 200,
                data: recettes
            })
        } catch (e) {
            console.error(`[ERROR] recettes/getAll -> ${e}`)
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
