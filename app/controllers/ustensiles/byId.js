// // Core
const Ustensiles  = require("../../models/ustensiles.js")

module.exports = class GetUstensilesById {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.get(`/ustensiles/byId`, async (req, res) => {
        try {
            const ustensiles = await Ustensiles.findByPk(req.query.id);
            return res.status(200).json({
                code: 200,
                data: ustensiles
            })
        } catch (e) {
            console.error(`[ERROR] ustensiles/getAll -> ${e}`)
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
