// const Produits = require('../../models/produits');
// const Rebus = require('../../models/rebus');
// const Track = require('../../models/track');
// const TypeRebus = require('../../models/type_rebus');
const multer  = require('multer')
const fs  = require('fs')
const Track = require('../../models/track')
const upload = multer({ dest: 'uploads/' })

module.exports = class UploadRebusController {
    constructor(app) {
        this.app = app
        this.run()
    }

    /**
     * Middleware
     */
    async middleware() {
        // this.app.post('/rebus/uploadPhoto', async (req, res) => {
        //     try {
        //         const track = await Track.findByPk(req.body.id_track)
        //         // const typeOfRebus = await TypeRebus.findByPk(req.body.id_type_rebus)
        //         // const produit = await Produits.findByPk(req.body.id_produit)

        //         console.log(req.body)
        //         res.setHeader("Access-Control-Allow-Origin", "*");
        //         if (!req.body.id_track || !req.body.id_type_rebus || !req.body.id_produit || !req.body.nb_rebus || !req.body.path_dossier_photo) {
        //             return res.status(400).json({ message: "Les champs ne peuvent pas être vides." });
        //         };

        //         if (!track) {
        //             return res.status(400).json({ message: "L'id TRACK ou L'id type_rebus ou l'id produits n'existe pas !" });
        //         };

        //         await Rebus.create({
        //             id_track: req.body.id_track,
        //             id_type_rebus: req.body.id_type_rebus,
        //             id_produit: req.body.id_produit,
        //             nb_rebus: req.body.nb_rebus,
        //             path_dossier_photo: req.body.path_dossier_photo
        //         }).then(rebus => {
        //             if (rebus) {
        //                 return res.status(200).json({ message: "Le rebus a bien été créé." });
        //             };
        //         });

        //     } catch (error) {
        //         return res.status(500).json({ message: error.message || "Une erreur s'est produite lors de la création de la track." });
        //     }

        // });
        this.app.post('/rebus/uploadPhoto', upload.single('avatar'), async function (req, res, next) {
            const track = await Track.findByPk(req.body.id)
            if(!track) {
                return res.status(400).json({ message: "L'id TRACK n'existe pas !" });
            }

            const oldPath = 'uploads/' + req.file.filename
            const newPath = 'uploads/' + req.body.id +  '/' + req.file.filename

            if (!fs.existsSync('uploads/' + req.body.id)){
                fs.mkdirSync('uploads/' + req.body.id);
            }

            fs.rename(oldPath, newPath, function (err) {
                if (err) throw err
                return res.status(200).json({ message: "La photo du rebus a bien été créé." });
            })
        })
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}
