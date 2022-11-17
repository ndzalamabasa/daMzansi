const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.user || 'user',
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'db',
  password: process.env.PASSWORD || 'pass',
  port: process.env.PORT || 5432,
})

module.exports = {
  pool,
}
