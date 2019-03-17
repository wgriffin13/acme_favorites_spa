const Sequelize = require('sequelize')
const conn = require('./conn')

const Thing = conn.define('thing', {
    name: Sequelize.STRING
})

module.exports = Thing
