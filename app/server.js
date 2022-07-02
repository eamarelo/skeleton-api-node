// Dependencies
const {
  createServer
} = require('http')
const fs = require("fs")
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const con = require('./db.js')

const dotenv = require('dotenv')
  // Core
const routes = require('./controllers/routes.js')
// Core


/**
 * Server
 */
module.exports = class Server {
  constructor() {
    this.app = express()
    this.run()
  }

  /**
   * Middleware
   */
  middleware() {
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(bodyParser.urlencoded({
        'extended': true
    }))
    this.app.use(bodyParser.json())
  }

  /**
   * Routes
   */
  routes()  {

    //UNCOMMENT BELOW TO TEST

    // new routes.example.ExampleController(this.app)
    new routes.menu.CreateMenu(this.app)

    // If route not exist
    this.app.use((req, res) => {
      res.status(404).json({
        code: 404,
        message: "Not Found"
      })
    })
  }

  /**
   * Security
   */
  security() {
    this.app.use(helmet())
    this.app.disable('x-powered-by')
  }

  /**
   * Run
   */
  run() {
    try {
      this.con
      this.security()
      this.middleware()
      this.routes()
      const port = process.env.PORT || 4000
      this.app.listen(port)
      console.log(`Your port is ${port}`)
    } catch (e) {
      console.error(`[ERROR] Server -> ${e}`)
    }
  }
}
