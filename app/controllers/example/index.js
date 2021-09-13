// // Core
// const sql = require("mssql")
// const fs = require("fs")
// const { poolPromise } = require("../db.js")
// const papa = require("papaparse")
// const ftp = require("basic-ftp")
// var nodemailer = require('nodemailer');
// const dotenv = require('dotenv')
// const client = new ftp.Client()
// client.ftp.verbose = false
// dotenv.config()

module.exports = class GetFile {
    constructor(app) {
      this.app = app
      this.run()
    }

    /**
     * Middleware
     */
     async middleware() {
            try {
                console.log("inside example controller")
            } catch (e) {
                console.log(e)
                console.error(`[ERROR] GetFile/get -> ${e}`)
                await sql.close()
            }
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}
