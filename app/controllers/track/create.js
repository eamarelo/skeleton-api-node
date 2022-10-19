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
            res.setHeader("Access-Control-Allow-Origin", "*");

            if (!req.body.id_box || !req.body.id_producteur_dechet || !req.body.date_heure
                || !req.body.id_zone_lavage || !req.body.id_zone_lavage || !req.body.id_statut_track) {
                res.status(400).json({
                    message: "Les champs ne doivent être vidés",
                });
                return;
            };

            const track = {
                id_box: req.body.id_box,
                id_producteur_dechet: req.body.id_producteur_dechet,
                date_heure: req.body.date_heure,
                id_zone_lavage: req.body.id_zone_lavage,
                id_statut_track: req.body.id_statut_track
            };

            Track.create(track).then(track => {
                if (track) {
                    res.status(200).json({
                        message: "La track a bien été créé.",
                    });
                    return
                };
                res.send(track);
            })
                .catch(error => {
                    res.status(500).json({
                        message: error.message || "Une erreur s'est produite lors de la création de la track.",
                    })
                });
        });
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}
