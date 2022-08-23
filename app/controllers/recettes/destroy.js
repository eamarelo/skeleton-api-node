// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Recettes  = require("../../models/recettes.js")
const { recettes } = require("../routes.js")

module.exports = class DestroyRecettes {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.delete(`/recettes/destroy`, async (req, res) => {
        try {
            await Recettes.destroy({
                where: {
                  id: req.query.id
                }
            });
            return res.status(200).json({
                code: 200,
                message: 'La recette a bien été supprimée'
            })
        } catch (e) {
            console.error(`[ERROR] recettes/destroy -> ${e}`)
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
