const Box = require('../../models/box');
const ProducteurDechets = require('../../models/producteur_dechets');

module.exports = class UpdateBoxController {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        this.app.put('/box/update/', async (req, res) => {
            try {
                res.setHeader("Access-Control-Allow-Origin", "*");
                const prodDechet = await ProducteurDechets.findByPk(req.body.id_producteur_dechet);
                Box.update({ id_producteur_dechet: prodDechet.id }, { where: { id: req.body.id } }).then(box => {
                    if (box[0] !== 0) {
                        return res.json({ message: "La box a été mise à jour avec succès." });
                    } else {
                        return res.status(404).json({ message: `La box avec l'id= ${prodDechet.id} n'a pas été trouvée.` });
                    };
                });

            } catch (error) {
                return res.status(500).json({ message: error.message || "Erreur de mise à jour de la box avec l'identifiant" + prodDechet.id });
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
