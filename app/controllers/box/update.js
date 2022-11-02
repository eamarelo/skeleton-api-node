const Box = require('../../models/box');

module.exports = class UpdateBoxController {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        this.app.post('/box/update/:id_producteur_dechet', async (req, res) => {
            try {
                res.setHeader("Access-Control-Allow-Origin", "*");
                const id_producteur_dechet = req.params.id_producteur_dechet;

                Box.update(req.body, { where: { id_producteur_dechet: id_producteur_dechet } }).then(box => {
                    if (box.length == 1) {
                        return res.json({ message: "La box a été mise à jour avec succès." });
                    } else {
                        return res.status(404).json({ message: `La box avec l'id= ${id_producteur_dechet} n'a pas été trouvée.` });
                    };
                });

            } catch (error) {
                return res.status(500).json({ message: error.message || "Erreur de mise à jour de la box avec l'identifiant" + id_producteur_dechet });
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
