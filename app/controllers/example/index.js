// // Core
// const fs = require("fs")
const { sequelize } = require("../../db.js")
// const papa = require("papaparse")
// const ftp = require("basic-ftp")
// var nodemailer = require('nodemailer');
// const dotenv = require('dotenv')
// const client = new ftp.Client()
// client.ftp.verbose = false
// dotenv.config()

module.exports = class ExampleController {
    constructor(app) {
      this.app = app
      this.run()
    }

    /**
     * Middleware
     */
     async middleware() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    /**
     * Run
     */
    run() {
        this.middleware()
    }
}
