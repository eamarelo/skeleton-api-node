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
    this.app.get(`/menu/getAll`, async (req, res) => {
        try {
            const menus = await Menus.findAll();
            return res.status(200).json({
                code: 200,
                data: menus
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
