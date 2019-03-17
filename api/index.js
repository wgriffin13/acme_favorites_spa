const router = require('express').Router()
const {Favorite, User, Thing} = require('../db/index')

router.get('/thingsCount', (req, res, next) => {
    Thing.findAndCountAll()
        .then(data => {
            res.send(data)
        })
})

router.get('/things', (req, res, next) => {
    Thing.findAll({order: [['name', 'ASC']], include: [{model: Favorite, include: [User]}]})
        .then(data => {
            res.send(data)
        })
})

router.get('/usersCount', (req, res, next) => {
    User.findAndCountAll()
        .then(data => {
            res.send(data)
        })
})

router.get('/users', (req, res, next) => {
    User.findAll({order: [['name', 'ASC'], [Favorite, 'rank', 'ASC']], include: [{model: Favorite, include: [Thing]}]})
        .then(data => {
            res.send(data)
        })
})

module.exports = router
