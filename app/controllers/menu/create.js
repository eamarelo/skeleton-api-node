// Dependencies

const validator = require('node-validator')
const db = require("../../db.js")
const dotenv = require('dotenv')

// Core
const check = validator.isObject()
    .withRequired('title', validator.isString())
    .withRequired('duration', validator.isString())
    .withRequired('difficulty', validator.isString())
    .withRequired('cost', validator.isString())

module.exports = class Create {
    constructor(app) {
        dotenv.config()

        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    middleware() {
        this.app.post('/menu/create', validator.express(check), async(req, res) => {
            try {
                    const title = req.body.title || null
                    const duration = req.body.duration || null
                    const difficulty = req.body.difficulty || null
                    const cost = req.body.cost || null

                    const createMenu = `INSERT INTO menus (nom, duree, difficultee, cout)` +
                        `VALUES (` +
                        `'${title}', '${duration}','${difficulty}', '${cost}')`

                    const  result = await db.promise().query(createMenu)
                    res.status(200).json(result)

            } catch (e) {
                console.error(`[ERROR] user/create -> ${e}`)
                res.status(400).json({
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