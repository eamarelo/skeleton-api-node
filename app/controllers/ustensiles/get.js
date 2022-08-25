// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Ustensiles  = require("../../models/ustensiles.js")
const { ustensiles } = require("../routes.js")

module.exports = class GetAllUstensiles {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.get(`/ustensiles/getAll`, async (req, res) => {
        try {
            const ustensiles = await Ustensiles.findAll();
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
