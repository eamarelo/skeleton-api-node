// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
const Tampons = require("../../models/tampon.js")
const Ingredients = require("../../models/ingredients.js")

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
            const arrayWhere = [];
            const arrayResp = [];

            const menus = await Tampons.findAll({
                where: {
                  idMenu: req.query.idMenu
                }
              });
              menus.map(menu => arrayWhere.push(menu.dataValues.idIngrédients))
              console.log(arrayWhere)
              const ingredients = await Ingredients.findAll({
                where: {
                  id: arrayWhere
                }
              });
              ingredients.map(menu => arrayResp.push(menu.dataValues))
              return res.status(200).json({
                code: 200,
                data: arrayResp
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
