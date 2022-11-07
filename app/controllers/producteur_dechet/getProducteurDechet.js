// // Core
const sql = require("mssql")
// const fs = require("fs")
const { poolPromise } = require("../../db.js")
const ProducteurDechet = require('../../models/producteur_dechets')

module.exports = class GetProducteurDechet {
    constructor(app) {
      this.app = app
      this.run()
    }

    /**
     * Middleware
     */
     async middleware() {
      this.app.get(`/producteurDechet/get`, async (req, res) => {
        try {
          const producteurDechet = await ProducteurDechet.findByPk(req.query.id)
          if (producteurDechet === null) {
              return res.status(404).json({ message:"Le producteur de déchet avec l'id : " + req.body.id + " n'existe pas" });
            } else {
              return res.status(200).json({
                code: 200,
                data: producteurDechet
            })
          }
        } catch (e) {
          return res.status(500).json({ message: error.message || "Une erreur s'est produite lord du get du producteur de déchets" + req.query.id });
        }
      })

    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}
