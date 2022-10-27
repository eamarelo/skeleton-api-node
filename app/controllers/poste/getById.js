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
                    console.log('Not found!');
                  } else {
                    return res.status(200).json({
                      code: 200,
                      data: poste
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
