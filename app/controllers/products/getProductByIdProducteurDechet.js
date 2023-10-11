// // Core
const sql = require("mssql")
const { poolPromise } = require("../../db.js")

module.exports = class GetProductByIdProducteurDechet {
    constructor(app) {
      this.app = app
      this.run()
    }

    /**
     * Middleware
     */
     async middleware() {
      this.app.get(`/productByProducteurDechetId/get`, async (req, res) => {
        try {
            const pool = await poolPromise
            const userCheck = `use New_Prod 
            select Distinct produits.nom from producteurs_dechets
            
            inner join Contrat.dbo.dispositifs_producteurs_dechets on producteurs_dechets.id = dispositifs_producteurs_dechets.id_producteur_dechets
            inner join Contrat.dbo.dispositifs on Contrat.dbo.dispositifs_producteurs_dechets.id_dispositif = dispositifs.id
            inner join Contrat.dbo.prestations on Contrat.dbo.dispositifs.id_prestation = prestations.id
            inner join Contrat.dbo.contrats on Contrat.dbo.prestations.id_contrat = contrats.id
            inner join Contrat.dbo.dispositifs_produits on Contrat.dbo.dispositifs.id = dispositifs_produits.id_dispositif
            inner join Contrat.dbo.produits on dispositifs_produits.id_produit = produits.id
            where  Contrat.dbo.contrats.statut in (1, 9, 10)`
            const result = await pool.request().query(userCheck)
            console.log(result)
          if (result.recordset === null) {
              return res.status(404).json({ message:"Ce producteur de déchets n'a pas de produits." });
            } else {
              return res.status(200).json({
                code: 200,
                data: result.recordset
            })
          }
        } catch (e) {
          return res.status(500).json({ message: e.message || "Une erreur s'est produite lors du get des produits" });
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
