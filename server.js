const express = require('express')
const volleyball = require('volleyball')
const path = require('path')
const app = express()


// Logging
app.use(volleyball)

// API route for data
app.use('/api', require('./api'))

// Send exported JS file from webpack to default app route
app.get('/app.js', (req, res, next) => res.sendFile(path.join(__dirname, 'dist', 'main.js')));

// Default route
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

module.exports = app
