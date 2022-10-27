const Colisage = require('../../models/colisage');

module.exports = class CreateColisageController {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        this.app.post('/colisage/post', async (req, res) => {
            try {
                res.setHeader("Access-Control-Allow-Origin", "*");
                if (!req.body.id_track || !req.body.id_produit || !req.body.nb_add || !req.body.is_ready) {
                    console.log(req.body)
                    return res.status(400).json({ message: "Les champs ne peuvent pas être vides." });
                };
                Colisage.create({
                    id_track: req.body.id_track,
                    id_produit: req.body.id_produit,
                    nb_add: req.body.nb_add,
                    is_ready: req.body.is_ready
                }).then(colisage => {
                    if (colisage) {
                        return res.status(200).json({ message: "Le colisage a bien été créé." });
                    };
                });

            } catch (error) {
                return res.status(500).json({ message: error.message || "Une erreur s'est produite lors de la création de la track." });
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
