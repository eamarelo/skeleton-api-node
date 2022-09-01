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
        const tampons =  Tampons.build({
            idRecettes: data.idRecettes,
            idIngrédients: datas.idIngrédients,
            idUnités: data.idUnités,
            idUstensiles: data.idUstensiles,
            idProduits: data.idProduits
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
