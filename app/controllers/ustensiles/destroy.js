// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Ustensiles  = require("../../models/ustensiles.js")
const { ustensiles } = require("../routes.js")

module.exports = class DestroyUstensiles {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.delete(`/ustensiles/destroy`, async (req, res) => {
        try {
            await Ustensiles.destroy({
                where: {
                  id: req.query.id
                }
            });
            return res.status(200).json({
                code: 200,
                message: 'L\'ustensile a bien été supprimée'
            })
        } catch (e) {
            console.error(`[ERROR] ustensiles/destroy -> ${e}`)
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
