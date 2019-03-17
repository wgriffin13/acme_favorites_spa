const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_favorites_spaDB', {
  logging: false
})

module.exports = conn
