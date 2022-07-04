// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Menus  = require("../../models/menus.js")
const { menus } = require("../routes.js")

module.exports = class GetMenus {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.delete(`/menu/destroy`, async (req, res) => {
        try {
            await Menus.destroy({
                where: {
                  id: req.query.id
                }
            });
            return res.status(200).json({
                code: 200,
                message: 'Le menu a bien été supprimé'
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
