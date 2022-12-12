const Box = require('../../models/box');
const ProducteurDechets = require('../../models/producteur_dechets');
const Track = require('../../models/track');

module.exports = class CreateTrackController {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        this.app.post('/track/post', async (req, res) => {
            try {
                const box = await Box.findByPk(req.body.id_box)
                const producteurDechet = await ProducteurDechets.findByPk(req.body.id_producteur_dechet)
                res.setHeader("Access-Control-Allow-Origin", "*");

                if (!req.body.id_box || !req.body.id_producteur_dechet || !req.body.id_zone_lavage || !req.body.id_statut_track) {
                    return res.status(400).json({ message: "Les champs ne doivent pas être vides." });
                };
                if(!box || !producteurDechet) {
                    return res.status(400).json({ message: "L'id BOX ou l'id PRODUCTEUR DE DECHETS n'existe pas !" });
                }

                await Track.create({
                    id_box: req.body.id_box,
                    id_producteur_dechet: req.body.id_producteur_dechet,
                    id_zone_lavage: req.body.id_zone_lavage,
                    id_statut_track: req.body.id_statut_track
                }).then(track => {
                    if (track) {
                        return res.status(200).json({ message: "La track a bien été créé.", data: track});
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
