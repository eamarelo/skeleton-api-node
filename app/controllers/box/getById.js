const Box = require('../../models/box');

module.exports = class GetBoxByIdController {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        this.app.get('/box/get', async (req, res) => {
            try {
                const box = await Box.findByPk(req.query.id)
                if (box === null) {
                    console.log('Not found!');
                  } else {
                    return res.status(200).json({
                      code: 200,
                      data: box
                  })
                }
            } catch (error) {
                return res.status(500).json({ message: error.message || "La box avec l'id : " + id_producteur_dechet + " n'existe pas" });
            }

        });
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}
