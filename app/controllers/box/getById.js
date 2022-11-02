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
                    return res.status(404).json({ message:"La box avec l'id : " + req.body.id + " n'existe pas" });
                  } else {
                    return res.status(200).json({
                      code: 200,
                      data: box
                  })
                }
            } catch (error) {
                return res.status(500).json({ message: error.message || "Une erreur s'est produite lord du get" + req.query.id });
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
