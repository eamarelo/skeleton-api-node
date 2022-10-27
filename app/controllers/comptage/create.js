const Comptage = require('../../models/comptage');

module.exports = class CreateComptageController {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        this.app.post('/comptage/post', async (req, res) => {
            try {
                res.setHeader("Access-Control-Allow-Origin", "*");
                if (!req.body.id_track || !req.body.id_produit || !req.body.nb_reel || !req.body.has_comptage) {
                    return res.status(400).json({ message: "Les champs ne doivent être vidés." });
                };
                Comptage.create({
                    id_track: req.body.id_track,
                    id_produit: req.body.id_produit,
                    nb_reel: req.body.nb_reel,
                    has_comptage: req.body.has_comptage
                }).then(comptage => {
                    if (comptage) {
                        return res.status(200).json({ message: "La comptage a bien été créé." });
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
