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
    try {
            const menu =  Menus.build({nom: "Tarte aux pommes", duree: 15, difficultee: "normal", cout: "15 euros"})
            await menu.save()
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
}

/**
 * Run
 */
run() {
    this.middleware()
}
}
