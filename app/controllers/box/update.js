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
        this.app.put('/box/update/', async (req, res) => {
            try {
                res.setHeader("Access-Control-Allow-Origin", "*");
                const id = req.body.id;
                Box.update({id_producteur_dechet: req.body.id_producteur_dechet}, { where: { id: id } }).then(box => {
                    if (box.length == 1) {
                        return res.json({ message: "La box a été mise à jour avec succès." });
                    } else {
                        return res.json({ message: `Impossible de mettre à jour la box avec l'id= ${id_producteur_dechet} peut-être que la box n'a pas été trouvée.` });
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
