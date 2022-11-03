const Poste = require('../../models/poste');

module.exports = class GetPosteByIdController {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        this.app.get('/poste/get', async (req, res) => {
            try {
                const poste = await Poste.findByPk(req.query.id)
                if (poste === null) {
                    return res.status(404).json({ message:"Le poste avec l'id : " + req.body.id + " n'existe pas" });
                  } else {
                    return res.status(200).json({
                      code: 200,
                      data: poste
                  })
                }
            } catch (error) {
                return res.status(500).json({ message: error.message || "Une erreur s'est produite lors du get de " });
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
