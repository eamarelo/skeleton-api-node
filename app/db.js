const dotenv = require('dotenv')
dotenv.config()
const sql = require('mssql')

const config = { 
  user: 'test_user',
  password: "r18K|qqfN@Y&dT4`",
  // local
  server: '172.20.69.4', // You can use 'localhost\\instance' to connect to named instance
  // ikoula
 //  server: '193.56.15.196'
  database: 'BIBOARD',
  driver: 'tedious',
  options: {
       encrypt: false // Use this if you're on Windows Azure
  }
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}