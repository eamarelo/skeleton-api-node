// // Core
const Tampons  = require("../../models/tampon.js")

module.exports = class CreateTampons {
constructor(app) {
    this.app = app
    this.run()
}

/**
 * Middleware
 */
async middleware(data) {
    try {
        console.log(data)
        const tampons =  Tampons.build({
            idMenu: data.idMenu,
            idIngrédients: data.idIngredients,
            idUnités: data.idUnites, 
        })
        await tampons.save()
    } catch (e) {
        console.error(`[ERROR] tampons/create -> ${e}`)

    }

}

/**
 * Run
 */
run() {
    this.middleware()
}
}
