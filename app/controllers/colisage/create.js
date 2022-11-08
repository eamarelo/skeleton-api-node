const Colisage = require('../../models/colisage');
const Produits = require('../../models/produits');
const Track = require('../../models/track');

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
                const track = await Track.findByPk(req.body.id_track)
                const produit = await Produits.findByPk(req.body.id_produit)

                res.setHeader("Access-Control-Allow-Origin", "*");
                if (!req.body.id_track || !req.body.id_produit || !req.body.nb_add || !req.body.is_ready) {
                    return res.status(400).json({ message: "Les champs ne peuvent pas être vides." });
                };

                if(!track || !produit) {
                    return res.status(400).json({ message: "L'id TRACK ou l'id PRODUITS n'existe pas !'" });
                }

                await Colisage.create({
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
                return res.status(500).json({ message: error.message || "Une erreur s'est produite lors de la création du colisage." });
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
