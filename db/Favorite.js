const Sequelize = require('sequelize')
const conn = require('./conn')

const Favorite = conn.define('favorite', {
    rank: Sequelize.INTEGER
})

module.exports = Favorite
