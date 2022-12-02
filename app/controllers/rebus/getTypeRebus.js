// // Core
const sql = require("mssql")
const { poolPromise } = require("../../db.js")
const TypeOfRebus = require("../../models/type_rebus.js")

module.exports = class GetAllTypeRebus {
    constructor(app) {
      this.app = app
      this.run()
    }

    /**
     * Middleware
     */
     async middleware() {
      this.app.get(`/typeRebus/get`, async (req, res) => {
        try {
          const typeOfRebus = await TypeOfRebus.findAll();
          if (typeOfRebus === null) {
              return res.status(404).json({ message:"Il n'y a aucun type de rebus existant." });
            } else {

            //   return res.status(200).json({

            //     code: 200,

            //     data: typeOfRebus

           // })

            return res.send(typeOfRebus)

          }
        } catch (e) {
          return res.status(500).json({ message: e.message || "Une erreur s'est produite lors du get des types de rebus" });
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