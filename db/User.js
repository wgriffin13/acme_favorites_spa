const Sequelize = require('sequelize')
const conn = require('./conn')

const User = conn.define('user', {
    name: Sequelize.STRING
})

module.exports = User
