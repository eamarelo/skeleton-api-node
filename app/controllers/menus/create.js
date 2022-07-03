// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Menus  = require("../../models/menus.js")
const { menus } = require("../routes.js")

module.exports = class CreateMenus {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
async middleware() {
    this.app.post(`/menu/create`, async (req, res) => {
        try {
            console.log(req)
            const menu =  Menus.build({
                nom: req.body.title,
                duree: req.body.duration,
                difficultee: req.body.difficulty, 
                cout: req.body.cost
            })
            await menu.save()
            return res.status(200).json({
                code: 200,
                message: 'Le menu a bien été sauvegardé'
            })
        } catch (e) {
            console.error(`[ERROR] menus/create -> ${e}`)
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
