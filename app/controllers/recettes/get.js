// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Recettes  = require("../../models/recettes.js")
const { recettes } = require("../routes.js")

module.exports = class GetRecettes {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.get(`/recettes/getAll`, async (req, res) => {
        try {
            const recettes = await Recettes.findAll();
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
