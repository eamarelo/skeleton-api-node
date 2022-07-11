// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Tampons = require("../../models/tampon.js")

module.exports = class TamponsByIdMenus {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
    async middleware() {
    this.app.get(`/tampon/byIdMenu`, async (req, res) => {
        try {
            const menus = await Tampons.findAll({
                where: {
                  idMenu: req.query.idMenu
                }
              });;

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
